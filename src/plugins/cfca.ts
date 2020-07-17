/**
 * @file (cfca)
 * Created by baidu on 2020/7/15
 */

const {postRequest} = require('../utils');

const plugin = (args?: any) => ({
    name: 'CFCA',
    func: {
        postTx: async function(defaultArgs: any, node: string, chain: string, realBody: any) {
            // @ts-ignore
            const cfcaCertContentBytes = global.cert;

            const pluginVerifyInfo = {
                pluginName: 'grpcdemo',
                contents: btoa(cfcaCertContentBytes)
            };

            const body = {
                pluginVerifyInfos: [pluginVerifyInfo],
                bcname: chain,
                initiatoraddress: defaultArgs.address
            };

            realBody.header = await postRequest(`${node}/v1/get_signs`, body);

            return realBody;
        }
    },
    hookFuncs: [
        'postTx'
    ],
    args: Object.assign({}, {
        postTx: {
            server: 'http://10.64.27.48:8093',
            certFile: 'cfca.cert',
            address: 'nuSMPvo6UUoTaT8mMQmHbfiRbJNbAymGh',
        }
    }, args)
});

export default plugin;
