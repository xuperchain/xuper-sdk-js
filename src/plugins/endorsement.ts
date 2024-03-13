/**
 * @file (endorsement)
 */

import {
    UTXO,
    TXOutput,
    TransactionModel,
    AuthModel,
    AccountModel,
    Options
} from "../types";
import * as Requests from "../requests";
import { convert } from "../utils";

const plugin = (args: any) => ({
    name: "Compliance",
    init: function(defaultArgs: any, sdkOptions: Options) {
        if (!sdkOptions.env?.node?.disableGRPC) {
            Requests.initializationEndorseClient(defaultArgs.transfer.server);
        }
    },
    func: {
        makeTransaction: async function(
            defaultArgs: any,
            account: AccountModel,
            ti: TransactionModel,
            authRequires: AuthModel[],
            preExecWithUtxosObj: any
        ) {
            let tx: TransactionModel;

            let newPreExecWithUtxosObj = { ...preExecWithUtxosObj };

            const { fee: endorseFee, endorseServiceFeeAddr } = defaultArgs;

            const { utxoOutput } = preExecWithUtxosObj;

            // @ts-ignore
            const checkTx = this.generateTransaction(
                account,
                { utxoOutput },
                [],
                { amount: endorseFee, fee: 0, to: endorseServiceFeeAddr }
            );

            let totalSelected: number[] = [];
            const utxoList: UTXO[] = [];

            checkTx.txOutputs.forEach((txOutput: TXOutput, index: number) => {
                // @ts-ignore
                if (txOutput.toAddr === btoa(account.address)) {
                    const utxo: UTXO = {
                        amount: txOutput.amount,
                        toAddr: txOutput.toAddr,
                        refTxid: checkTx.txid,
                        refOffset: index
                    };
                    utxoList.push(utxo);
                    totalSelected = atob(utxo.amount)
                        .split("")
                        .map(w => w.charCodeAt(0));
                }
            });

            const newUtxoOutput = {
                utxoList,
                totalSelected
            };

            newPreExecWithUtxosObj = {
                ...newPreExecWithUtxosObj,
                utxoOutput: newUtxoOutput
            };

            // @ts-ignore
            tx = this.generateTransaction(
                account,
                newPreExecWithUtxosObj,
                Object.keys(authRequires),
                ti
            );

            // @ts-ignore
            await Object.keys(authRequires).reduce(
                async (prov: any, cur: any): Promise<any> => {
                    if (prov) {
                        tx = prov;
                    }
                    const auth = authRequires[cur];
                    return auth.sign(checkTx, await tx);
                },
                0
            );

            return tx;
        },
        transfer: function(defaultArgs: any, chain: string) {
            const {
                fee: endorseFee,
                server,
                endorseServiceCheckAddr
            } = defaultArgs;
            return {
                [endorseServiceCheckAddr]: {
                    fee: endorseFee,
                    sign: async (
                        checkTx: TransactionModel,
                        tx: TransactionModel
                    ): Promise<TransactionModel> => {
                        const obj = {
                            bcname: chain,
                            // @ts-ignore
                            tx: convert(tx, ["jsonEncoded"])
                        };

                        const te = new TextEncoder();
                        const descBuff: Uint8Array = te.encode(
                            JSON.stringify(obj)
                        );
                        const descArr: string[] = [];
                        descBuff.forEach(n =>
                            descArr.push(String.fromCharCode(n))
                        );

                        const body = {
                            RequestName: "ComplianceCheck",
                            BcName: chain,
                            Fee: convert(checkTx),
                            RequestData: btoa(descArr.join(""))
                        };

                        const result = await Requests.endorser(server, body);

                        if (!tx.authRequireSigns) {
                            tx.authRequireSigns = [];
                        }

                        tx.authRequireSigns.push(result.EndorserSign);

                        return tx;
                    }
                }
            };
        }
    },
    hookFuncs: ["makeTransaction", "transfer"],
    args: Object.assign(
        {},
        {
            makeTransaction: {
                server: process.env.ENDORSE_SERVER || "",
                fee: process.env.FEE || "",
                endorseServiceCheckAddr: process.env.SERVICE_SIGN_ADDRESS || "",
                endorseServiceFeeAddr: process.env.SERVICE_FEE_ADDRESS || ""
            },
            transfer: {
                server: process.env.ENDORSE_SERVER || "",
                fee: process.env.FEE || "",
                endorseServiceCheckAddr: process.env.SERVICE_SIGN_ADDRESS || "",
                endorseServiceFeeAddr: process.env.SERVICE_FEE_ADDRESS || ""
            }
        },
        args
    )
});

export default plugin;
