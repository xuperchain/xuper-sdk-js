// source: src/proto/xuper.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.xuperchain.AK2AccountRequest', null, global);
goog.exportSymbol('proto.xuperchain.AK2AccountResponse', null, global);
goog.exportSymbol('proto.xuperchain.Acl', null, global);
goog.exportSymbol('proto.xuperchain.AclStatus', null, global);
goog.exportSymbol('proto.xuperchain.AddressBalanceStatus', null, global);
goog.exportSymbol('proto.xuperchain.AddressContractsRequest', null, global);
goog.exportSymbol('proto.xuperchain.AddressContractsResponse', null, global);
goog.exportSymbol('proto.xuperchain.AddressStatus', null, global);
goog.exportSymbol('proto.xuperchain.AkSet', null, global);
goog.exportSymbol('proto.xuperchain.AkSets', null, global);
goog.exportSymbol('proto.xuperchain.BCSpeeds', null, global);
goog.exportSymbol('proto.xuperchain.BCStatus', null, global);
goog.exportSymbol('proto.xuperchain.BCTipStatus', null, global);
goog.exportSymbol('proto.xuperchain.BatchTxs', null, global);
goog.exportSymbol('proto.xuperchain.Block', null, global);
goog.exportSymbol('proto.xuperchain.Block.EBlockStatus', null, global);
goog.exportSymbol('proto.xuperchain.BlockChains', null, global);
goog.exportSymbol('proto.xuperchain.BlockHeight', null, global);
goog.exportSymbol('proto.xuperchain.BlockID', null, global);
goog.exportSymbol('proto.xuperchain.ContractList', null, global);
goog.exportSymbol('proto.xuperchain.ContractResponse', null, global);
goog.exportSymbol('proto.xuperchain.ContractStatData', null, global);
goog.exportSymbol('proto.xuperchain.ContractStatDataRequest', null, global);
goog.exportSymbol('proto.xuperchain.ContractStatDataResponse', null, global);
goog.exportSymbol('proto.xuperchain.ContractStatus', null, global);
goog.exportSymbol('proto.xuperchain.DeployNativeCodeRequest', null, global);
goog.exportSymbol('proto.xuperchain.DeployNativeCodeResponse', null, global);
goog.exportSymbol('proto.xuperchain.DposCandidatesRequest', null, global);
goog.exportSymbol('proto.xuperchain.DposCandidatesResponse', null, global);
goog.exportSymbol('proto.xuperchain.DposCheckResultsRequest', null, global);
goog.exportSymbol('proto.xuperchain.DposCheckResultsResponse', null, global);
goog.exportSymbol('proto.xuperchain.DposNominateInfo', null, global);
goog.exportSymbol('proto.xuperchain.DposNominateRecordsRequest', null, global);
goog.exportSymbol('proto.xuperchain.DposNominateRecordsResponse', null, global);
goog.exportSymbol('proto.xuperchain.DposNomineeRecordsRequest', null, global);
goog.exportSymbol('proto.xuperchain.DposNomineeRecordsResponse', null, global);
goog.exportSymbol('proto.xuperchain.DposStatus', null, global);
goog.exportSymbol('proto.xuperchain.DposStatusRequest', null, global);
goog.exportSymbol('proto.xuperchain.DposStatusResponse', null, global);
goog.exportSymbol('proto.xuperchain.DposVoteRecordsRequest', null, global);
goog.exportSymbol('proto.xuperchain.DposVoteRecordsResponse', null, global);
goog.exportSymbol('proto.xuperchain.DposVotedRecordsRequest', null, global);
goog.exportSymbol('proto.xuperchain.DposVotedRecordsResponse', null, global);
goog.exportSymbol('proto.xuperchain.GasPrice', null, global);
goog.exportSymbol('proto.xuperchain.GetAccountContractsRequest', null, global);
goog.exportSymbol('proto.xuperchain.GetAccountContractsResponse', null, global);
goog.exportSymbol('proto.xuperchain.HDInfo', null, global);
goog.exportSymbol('proto.xuperchain.Header', null, global);
goog.exportSymbol('proto.xuperchain.IdentityAuth', null, global);
goog.exportSymbol('proto.xuperchain.IdentityAuths', null, global);
goog.exportSymbol('proto.xuperchain.InternalBlock', null, global);
goog.exportSymbol('proto.xuperchain.InvokeRPCRequest', null, global);
goog.exportSymbol('proto.xuperchain.InvokeRPCResponse', null, global);
goog.exportSymbol('proto.xuperchain.InvokeRequest', null, global);
goog.exportSymbol('proto.xuperchain.InvokeResponse', null, global);
goog.exportSymbol('proto.xuperchain.LedgerMeta', null, global);
goog.exportSymbol('proto.xuperchain.ModifyBlock', null, global);
goog.exportSymbol('proto.xuperchain.NativeCodeDesc', null, global);
goog.exportSymbol('proto.xuperchain.NativeCodeStatus', null, global);
goog.exportSymbol('proto.xuperchain.NativeCodeStatusRequest', null, global);
goog.exportSymbol('proto.xuperchain.NativeCodeStatusResponse', null, global);
goog.exportSymbol('proto.xuperchain.PermissionModel', null, global);
goog.exportSymbol('proto.xuperchain.PermissionRule', null, global);
goog.exportSymbol('proto.xuperchain.PreExecWithSelectUTXORequest', null, global);
goog.exportSymbol('proto.xuperchain.PreExecWithSelectUTXOResponse', null, global);
goog.exportSymbol('proto.xuperchain.RawUrl', null, global);
goog.exportSymbol('proto.xuperchain.ResourceLimit', null, global);
goog.exportSymbol('proto.xuperchain.ResourceType', null, global);
goog.exportSymbol('proto.xuperchain.SignatureInfo', null, global);
goog.exportSymbol('proto.xuperchain.Speeds', null, global);
goog.exportSymbol('proto.xuperchain.SystemsStatus', null, global);
goog.exportSymbol('proto.xuperchain.SystemsStatusReply', null, global);
goog.exportSymbol('proto.xuperchain.TokenDetail', null, global);
goog.exportSymbol('proto.xuperchain.TokenFrozenDetail', null, global);
goog.exportSymbol('proto.xuperchain.TokenFrozenDetails', null, global);
goog.exportSymbol('proto.xuperchain.Transaction', null, global);
goog.exportSymbol('proto.xuperchain.TransactionStatus', null, global);
goog.exportSymbol('proto.xuperchain.TxData', null, global);
goog.exportSymbol('proto.xuperchain.TxDataAccount', null, global);
goog.exportSymbol('proto.xuperchain.TxInput', null, global);
goog.exportSymbol('proto.xuperchain.TxInputExt', null, global);
goog.exportSymbol('proto.xuperchain.TxOutput', null, global);
goog.exportSymbol('proto.xuperchain.TxOutputExt', null, global);
goog.exportSymbol('proto.xuperchain.TxStatus', null, global);
goog.exportSymbol('proto.xuperchain.Utxo', null, global);
goog.exportSymbol('proto.xuperchain.UtxoInput', null, global);
goog.exportSymbol('proto.xuperchain.UtxoKey', null, global);
goog.exportSymbol('proto.xuperchain.UtxoMeta', null, global);
goog.exportSymbol('proto.xuperchain.UtxoOutput', null, global);
goog.exportSymbol('proto.xuperchain.UtxoRecord', null, global);
goog.exportSymbol('proto.xuperchain.UtxoRecordDetail', null, global);
goog.exportSymbol('proto.xuperchain.WasmCodeDesc', null, global);
goog.exportSymbol('proto.xuperchain.XChainErrorEnum', null, global);
goog.exportSymbol('proto.xuperchain.XuperSignature', null, global);
goog.exportSymbol('proto.xuperchain.voteRecord', null, global);
goog.exportSymbol('proto.xuperchain.votedRecord', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.Header = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.Header, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.Header.displayName = 'proto.xuperchain.Header';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.TxDataAccount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.TxDataAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.TxDataAccount.displayName = 'proto.xuperchain.TxDataAccount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.TxData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.TxData.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.TxData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.TxData.displayName = 'proto.xuperchain.TxData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.TxStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.TxStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.TxStatus.displayName = 'proto.xuperchain.TxStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.BatchTxs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.BatchTxs.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.BatchTxs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.BatchTxs.displayName = 'proto.xuperchain.BatchTxs';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.Block = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.Block, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.Block.displayName = 'proto.xuperchain.Block';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.BlockID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.BlockID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.BlockID.displayName = 'proto.xuperchain.BlockID';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.BlockHeight = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.BlockHeight, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.BlockHeight.displayName = 'proto.xuperchain.BlockHeight';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.TokenDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.TokenDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.TokenDetail.displayName = 'proto.xuperchain.TokenDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.AddressStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.AddressStatus.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.AddressStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.AddressStatus.displayName = 'proto.xuperchain.AddressStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.TokenFrozenDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.TokenFrozenDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.TokenFrozenDetail.displayName = 'proto.xuperchain.TokenFrozenDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.TokenFrozenDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.TokenFrozenDetails.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.TokenFrozenDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.TokenFrozenDetails.displayName = 'proto.xuperchain.TokenFrozenDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.AddressBalanceStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.AddressBalanceStatus.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.AddressBalanceStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.AddressBalanceStatus.displayName = 'proto.xuperchain.AddressBalanceStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.TxInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.TxInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.TxInput.displayName = 'proto.xuperchain.TxInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.TxOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.TxOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.TxOutput.displayName = 'proto.xuperchain.TxOutput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.XuperSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.XuperSignature.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.XuperSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.XuperSignature.displayName = 'proto.xuperchain.XuperSignature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.Transaction.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.Transaction.displayName = 'proto.xuperchain.Transaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.LedgerMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.LedgerMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.LedgerMeta.displayName = 'proto.xuperchain.LedgerMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.UtxoMeta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.UtxoMeta.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.UtxoMeta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.UtxoMeta.displayName = 'proto.xuperchain.UtxoMeta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.GasPrice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.GasPrice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.GasPrice.displayName = 'proto.xuperchain.GasPrice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.InternalBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.InternalBlock.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.InternalBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.InternalBlock.displayName = 'proto.xuperchain.InternalBlock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.BCStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.BCStatus.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.BCStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.BCStatus.displayName = 'proto.xuperchain.BCStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.BCTipStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.BCTipStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.BCTipStatus.displayName = 'proto.xuperchain.BCTipStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.BlockChains = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.BlockChains.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.BlockChains, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.BlockChains.displayName = 'proto.xuperchain.BlockChains';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.Speeds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.Speeds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.Speeds.displayName = 'proto.xuperchain.Speeds';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.BCSpeeds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.BCSpeeds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.BCSpeeds.displayName = 'proto.xuperchain.BCSpeeds';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.SystemsStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.SystemsStatus.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.SystemsStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.SystemsStatus.displayName = 'proto.xuperchain.SystemsStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.SystemsStatusReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.SystemsStatusReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.SystemsStatusReply.displayName = 'proto.xuperchain.SystemsStatusReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.RawUrl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.RawUrl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.RawUrl.displayName = 'proto.xuperchain.RawUrl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.Utxo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.Utxo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.Utxo.displayName = 'proto.xuperchain.Utxo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.UtxoInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.UtxoInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.UtxoInput.displayName = 'proto.xuperchain.UtxoInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.UtxoOutput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.UtxoOutput.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.UtxoOutput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.UtxoOutput.displayName = 'proto.xuperchain.UtxoOutput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.NativeCodeDesc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.NativeCodeDesc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.NativeCodeDesc.displayName = 'proto.xuperchain.NativeCodeDesc';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.WasmCodeDesc = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.WasmCodeDesc, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.WasmCodeDesc.displayName = 'proto.xuperchain.WasmCodeDesc';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DeployNativeCodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.DeployNativeCodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DeployNativeCodeRequest.displayName = 'proto.xuperchain.DeployNativeCodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DeployNativeCodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.DeployNativeCodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DeployNativeCodeResponse.displayName = 'proto.xuperchain.DeployNativeCodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.NativeCodeStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.NativeCodeStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.NativeCodeStatus.displayName = 'proto.xuperchain.NativeCodeStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.NativeCodeStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.NativeCodeStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.NativeCodeStatusRequest.displayName = 'proto.xuperchain.NativeCodeStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.NativeCodeStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.NativeCodeStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.NativeCodeStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.NativeCodeStatusResponse.displayName = 'proto.xuperchain.NativeCodeStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposCandidatesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.DposCandidatesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposCandidatesRequest.displayName = 'proto.xuperchain.DposCandidatesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposCandidatesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.DposCandidatesResponse.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.DposCandidatesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposCandidatesResponse.displayName = 'proto.xuperchain.DposCandidatesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposNominateRecordsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.DposNominateRecordsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposNominateRecordsRequest.displayName = 'proto.xuperchain.DposNominateRecordsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposNominateInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.DposNominateInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposNominateInfo.displayName = 'proto.xuperchain.DposNominateInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposNominateRecordsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.DposNominateRecordsResponse.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.DposNominateRecordsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposNominateRecordsResponse.displayName = 'proto.xuperchain.DposNominateRecordsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposNomineeRecordsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.DposNomineeRecordsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposNomineeRecordsRequest.displayName = 'proto.xuperchain.DposNomineeRecordsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposNomineeRecordsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.DposNomineeRecordsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposNomineeRecordsResponse.displayName = 'proto.xuperchain.DposNomineeRecordsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposVoteRecordsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.DposVoteRecordsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposVoteRecordsRequest.displayName = 'proto.xuperchain.DposVoteRecordsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.voteRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.voteRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.voteRecord.displayName = 'proto.xuperchain.voteRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposVoteRecordsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.DposVoteRecordsResponse.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.DposVoteRecordsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposVoteRecordsResponse.displayName = 'proto.xuperchain.DposVoteRecordsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposVotedRecordsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.DposVotedRecordsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposVotedRecordsRequest.displayName = 'proto.xuperchain.DposVotedRecordsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.votedRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.votedRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.votedRecord.displayName = 'proto.xuperchain.votedRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposVotedRecordsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.DposVotedRecordsResponse.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.DposVotedRecordsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposVotedRecordsResponse.displayName = 'proto.xuperchain.DposVotedRecordsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposCheckResultsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.DposCheckResultsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposCheckResultsRequest.displayName = 'proto.xuperchain.DposCheckResultsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposCheckResultsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.DposCheckResultsResponse.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.DposCheckResultsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposCheckResultsResponse.displayName = 'proto.xuperchain.DposCheckResultsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.DposStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposStatusRequest.displayName = 'proto.xuperchain.DposStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.DposStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposStatusResponse.displayName = 'proto.xuperchain.DposStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.DposStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.DposStatus.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.DposStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.DposStatus.displayName = 'proto.xuperchain.DposStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.InvokeRPCRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.InvokeRPCRequest.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.InvokeRPCRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.InvokeRPCRequest.displayName = 'proto.xuperchain.InvokeRPCRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.InvokeRPCResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.InvokeRPCResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.InvokeRPCResponse.displayName = 'proto.xuperchain.InvokeRPCResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.InvokeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.InvokeRequest.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.InvokeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.InvokeRequest.displayName = 'proto.xuperchain.InvokeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.InvokeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.InvokeResponse.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.InvokeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.InvokeResponse.displayName = 'proto.xuperchain.InvokeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.TxInputExt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.TxInputExt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.TxInputExt.displayName = 'proto.xuperchain.TxInputExt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.TxOutputExt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.TxOutputExt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.TxOutputExt.displayName = 'proto.xuperchain.TxOutputExt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.SignatureInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.SignatureInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.SignatureInfo.displayName = 'proto.xuperchain.SignatureInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.PermissionModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.PermissionModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.PermissionModel.displayName = 'proto.xuperchain.PermissionModel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.AkSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.AkSet.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.AkSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.AkSet.displayName = 'proto.xuperchain.AkSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.AkSets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.AkSets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.AkSets.displayName = 'proto.xuperchain.AkSets';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.Acl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.Acl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.Acl.displayName = 'proto.xuperchain.Acl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.AclStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.AclStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.AclStatus.displayName = 'proto.xuperchain.AclStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.IdentityAuth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.IdentityAuth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.IdentityAuth.displayName = 'proto.xuperchain.IdentityAuth';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.IdentityAuths = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.IdentityAuths.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.IdentityAuths, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.IdentityAuths.displayName = 'proto.xuperchain.IdentityAuths';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.ResourceLimit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.ResourceLimit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.ResourceLimit.displayName = 'proto.xuperchain.ResourceLimit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.AK2AccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.AK2AccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.AK2AccountRequest.displayName = 'proto.xuperchain.AK2AccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.AK2AccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.AK2AccountResponse.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.AK2AccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.AK2AccountResponse.displayName = 'proto.xuperchain.AK2AccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.GetAccountContractsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.GetAccountContractsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.GetAccountContractsRequest.displayName = 'proto.xuperchain.GetAccountContractsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.GetAccountContractsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.GetAccountContractsResponse.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.GetAccountContractsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.GetAccountContractsResponse.displayName = 'proto.xuperchain.GetAccountContractsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.ContractStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.ContractStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.ContractStatus.displayName = 'proto.xuperchain.ContractStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.PreExecWithSelectUTXORequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.PreExecWithSelectUTXORequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.PreExecWithSelectUTXORequest.displayName = 'proto.xuperchain.PreExecWithSelectUTXORequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.PreExecWithSelectUTXOResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.PreExecWithSelectUTXOResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.PreExecWithSelectUTXOResponse.displayName = 'proto.xuperchain.PreExecWithSelectUTXOResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.ContractResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.ContractResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.ContractResponse.displayName = 'proto.xuperchain.ContractResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.ModifyBlock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.ModifyBlock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.ModifyBlock.displayName = 'proto.xuperchain.ModifyBlock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.HDInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.HDInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.HDInfo.displayName = 'proto.xuperchain.HDInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.UtxoRecordDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.UtxoRecordDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.UtxoRecordDetail.displayName = 'proto.xuperchain.UtxoRecordDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.UtxoRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.UtxoRecord.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.UtxoRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.UtxoRecord.displayName = 'proto.xuperchain.UtxoRecord';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.UtxoKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.UtxoKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.UtxoKey.displayName = 'proto.xuperchain.UtxoKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.ContractStatDataRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.ContractStatDataRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.ContractStatDataRequest.displayName = 'proto.xuperchain.ContractStatDataRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.ContractStatDataResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.ContractStatDataResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.ContractStatDataResponse.displayName = 'proto.xuperchain.ContractStatDataResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.ContractStatData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.ContractStatData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.ContractStatData.displayName = 'proto.xuperchain.ContractStatData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.AddressContractsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.AddressContractsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.AddressContractsRequest.displayName = 'proto.xuperchain.AddressContractsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.ContractList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xuperchain.ContractList.repeatedFields_, null);
};
goog.inherits(proto.xuperchain.ContractList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.ContractList.displayName = 'proto.xuperchain.ContractList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xuperchain.AddressContractsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xuperchain.AddressContractsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xuperchain.AddressContractsResponse.displayName = 'proto.xuperchain.AddressContractsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.Header.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.Header.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.Header} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.Header.toObject = function(includeInstance, msg) {
  var f, obj = {
    logid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fromNode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    error: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.Header}
 */
proto.xuperchain.Header.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.Header;
  return proto.xuperchain.Header.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.Header} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.Header}
 */
proto.xuperchain.Header.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromNode(value);
      break;
    case 3:
      var value = /** @type {!proto.xuperchain.XChainErrorEnum} */ (reader.readEnum());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.Header.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.Header.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.Header} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.Header.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFromNode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getError();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string logid = 1;
 * @return {string}
 */
proto.xuperchain.Header.prototype.getLogid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.Header} returns this
 */
proto.xuperchain.Header.prototype.setLogid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string from_node = 2;
 * @return {string}
 */
proto.xuperchain.Header.prototype.getFromNode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.Header} returns this
 */
proto.xuperchain.Header.prototype.setFromNode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional XChainErrorEnum error = 3;
 * @return {!proto.xuperchain.XChainErrorEnum}
 */
proto.xuperchain.Header.prototype.getError = function() {
  return /** @type {!proto.xuperchain.XChainErrorEnum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.xuperchain.XChainErrorEnum} value
 * @return {!proto.xuperchain.Header} returns this
 */
proto.xuperchain.Header.prototype.setError = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.TxDataAccount.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.TxDataAccount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.TxDataAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxDataAccount.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    frozenHeight: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.TxDataAccount}
 */
proto.xuperchain.TxDataAccount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.TxDataAccount;
  return proto.xuperchain.TxDataAccount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.TxDataAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.TxDataAccount}
 */
proto.xuperchain.TxDataAccount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrozenHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.TxDataAccount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.TxDataAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.TxDataAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxDataAccount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFrozenHeight();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.xuperchain.TxDataAccount.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TxDataAccount} returns this
 */
proto.xuperchain.TxDataAccount.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string amount = 2;
 * @return {string}
 */
proto.xuperchain.TxDataAccount.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TxDataAccount} returns this
 */
proto.xuperchain.TxDataAccount.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 frozen_height = 3;
 * @return {number}
 */
proto.xuperchain.TxDataAccount.prototype.getFrozenHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.TxDataAccount} returns this
 */
proto.xuperchain.TxDataAccount.prototype.setFrozenHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.TxData.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.TxData.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.TxData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.TxData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxData.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    txid: msg.getTxid_asB64(),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fromAddr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fromPubkey: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fromScrkey: jspb.Message.getFieldWithDefault(msg, 5, ""),
    userSign: msg.getUserSign_asB64(),
    accountList: jspb.Message.toObjectList(msg.getAccountList(),
    proto.xuperchain.TxDataAccount.toObject, includeInstance),
    nonce: jspb.Message.getFieldWithDefault(msg, 8, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 9, 0),
    desc: msg.getDesc_asB64(),
    version: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.TxData}
 */
proto.xuperchain.TxData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.TxData;
  return proto.xuperchain.TxData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.TxData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.TxData}
 */
proto.xuperchain.TxData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 13:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTxid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromAddr(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromPubkey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromScrkey(value);
      break;
    case 14:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUserSign(value);
      break;
    case 6:
      var value = new proto.xuperchain.TxDataAccount;
      reader.readMessage(value,proto.xuperchain.TxDataAccount.deserializeBinaryFromReader);
      msg.addAccount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 12:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDesc(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.TxData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.TxData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.TxData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getTxid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFromAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFromPubkey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFromScrkey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUserSign_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      14,
      f
    );
  }
  f = message.getAccountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.xuperchain.TxDataAccount.serializeBinaryToWriter
    );
  }
  f = message.getNonce();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getDesc_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      12,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
};


/**
 * optional Header header = 13;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.TxData.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 13));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.TxData} returns this
*/
proto.xuperchain.TxData.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.TxData} returns this
 */
proto.xuperchain.TxData.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.TxData.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bytes txid = 1;
 * @return {string}
 */
proto.xuperchain.TxData.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes txid = 1;
 * This is a type-conversion wrapper around `getTxid()`
 * @return {string}
 */
proto.xuperchain.TxData.prototype.getTxid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTxid()));
};


/**
 * optional bytes txid = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxData.prototype.getTxid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTxid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxData} returns this
 */
proto.xuperchain.TxData.prototype.setTxid = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.TxData.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TxData} returns this
 */
proto.xuperchain.TxData.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string from_addr = 3;
 * @return {string}
 */
proto.xuperchain.TxData.prototype.getFromAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TxData} returns this
 */
proto.xuperchain.TxData.prototype.setFromAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string from_pubkey = 4;
 * @return {string}
 */
proto.xuperchain.TxData.prototype.getFromPubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TxData} returns this
 */
proto.xuperchain.TxData.prototype.setFromPubkey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string from_scrkey = 5;
 * @return {string}
 */
proto.xuperchain.TxData.prototype.getFromScrkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TxData} returns this
 */
proto.xuperchain.TxData.prototype.setFromScrkey = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes user_sign = 14;
 * @return {string}
 */
proto.xuperchain.TxData.prototype.getUserSign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * optional bytes user_sign = 14;
 * This is a type-conversion wrapper around `getUserSign()`
 * @return {string}
 */
proto.xuperchain.TxData.prototype.getUserSign_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUserSign()));
};


/**
 * optional bytes user_sign = 14;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUserSign()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxData.prototype.getUserSign_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUserSign()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxData} returns this
 */
proto.xuperchain.TxData.prototype.setUserSign = function(value) {
  return jspb.Message.setProto3BytesField(this, 14, value);
};


/**
 * repeated TxDataAccount account = 6;
 * @return {!Array<!proto.xuperchain.TxDataAccount>}
 */
proto.xuperchain.TxData.prototype.getAccountList = function() {
  return /** @type{!Array<!proto.xuperchain.TxDataAccount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TxDataAccount, 6));
};


/**
 * @param {!Array<!proto.xuperchain.TxDataAccount>} value
 * @return {!proto.xuperchain.TxData} returns this
*/
proto.xuperchain.TxData.prototype.setAccountList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.xuperchain.TxDataAccount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TxDataAccount}
 */
proto.xuperchain.TxData.prototype.addAccount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.xuperchain.TxDataAccount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.TxData} returns this
 */
proto.xuperchain.TxData.prototype.clearAccountList = function() {
  return this.setAccountList([]);
};


/**
 * optional string nonce = 8;
 * @return {string}
 */
proto.xuperchain.TxData.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TxData} returns this
 */
proto.xuperchain.TxData.prototype.setNonce = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 timestamp = 9;
 * @return {number}
 */
proto.xuperchain.TxData.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.TxData} returns this
 */
proto.xuperchain.TxData.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bytes desc = 12;
 * @return {string}
 */
proto.xuperchain.TxData.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes desc = 12;
 * This is a type-conversion wrapper around `getDesc()`
 * @return {string}
 */
proto.xuperchain.TxData.prototype.getDesc_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDesc()));
};


/**
 * optional bytes desc = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDesc()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxData.prototype.getDesc_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDesc()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxData} returns this
 */
proto.xuperchain.TxData.prototype.setDesc = function(value) {
  return jspb.Message.setProto3BytesField(this, 12, value);
};


/**
 * optional int32 version = 15;
 * @return {number}
 */
proto.xuperchain.TxData.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.TxData} returns this
 */
proto.xuperchain.TxData.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.TxStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.TxStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.TxStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    txid: msg.getTxid_asB64(),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    distance: jspb.Message.getFieldWithDefault(msg, 5, 0),
    tx: (f = msg.getTx()) && proto.xuperchain.Transaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.TxStatus}
 */
proto.xuperchain.TxStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.TxStatus;
  return proto.xuperchain.TxStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.TxStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.TxStatus}
 */
proto.xuperchain.TxStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTxid(value);
      break;
    case 4:
      var value = /** @type {!proto.xuperchain.TransactionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDistance(value);
      break;
    case 7:
      var value = new proto.xuperchain.Transaction;
      reader.readMessage(value,proto.xuperchain.Transaction.deserializeBinaryFromReader);
      msg.setTx(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.TxStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.TxStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.TxStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTxid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getDistance();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.xuperchain.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.TxStatus.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.TxStatus} returns this
*/
proto.xuperchain.TxStatus.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.TxStatus} returns this
 */
proto.xuperchain.TxStatus.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.TxStatus.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.TxStatus.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TxStatus} returns this
 */
proto.xuperchain.TxStatus.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes txid = 3;
 * @return {string}
 */
proto.xuperchain.TxStatus.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes txid = 3;
 * This is a type-conversion wrapper around `getTxid()`
 * @return {string}
 */
proto.xuperchain.TxStatus.prototype.getTxid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTxid()));
};


/**
 * optional bytes txid = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxStatus.prototype.getTxid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTxid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxStatus} returns this
 */
proto.xuperchain.TxStatus.prototype.setTxid = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional TransactionStatus status = 4;
 * @return {!proto.xuperchain.TransactionStatus}
 */
proto.xuperchain.TxStatus.prototype.getStatus = function() {
  return /** @type {!proto.xuperchain.TransactionStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.xuperchain.TransactionStatus} value
 * @return {!proto.xuperchain.TxStatus} returns this
 */
proto.xuperchain.TxStatus.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 distance = 5;
 * @return {number}
 */
proto.xuperchain.TxStatus.prototype.getDistance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.TxStatus} returns this
 */
proto.xuperchain.TxStatus.prototype.setDistance = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Transaction tx = 7;
 * @return {?proto.xuperchain.Transaction}
 */
proto.xuperchain.TxStatus.prototype.getTx = function() {
  return /** @type{?proto.xuperchain.Transaction} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Transaction, 7));
};


/**
 * @param {?proto.xuperchain.Transaction|undefined} value
 * @return {!proto.xuperchain.TxStatus} returns this
*/
proto.xuperchain.TxStatus.prototype.setTx = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.TxStatus} returns this
 */
proto.xuperchain.TxStatus.prototype.clearTx = function() {
  return this.setTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.TxStatus.prototype.hasTx = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.BatchTxs.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.BatchTxs.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.BatchTxs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.BatchTxs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BatchTxs.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    txsList: jspb.Message.toObjectList(msg.getTxsList(),
    proto.xuperchain.TxStatus.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.BatchTxs}
 */
proto.xuperchain.BatchTxs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.BatchTxs;
  return proto.xuperchain.BatchTxs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.BatchTxs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.BatchTxs}
 */
proto.xuperchain.BatchTxs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.xuperchain.TxStatus;
      reader.readMessage(value,proto.xuperchain.TxStatus.deserializeBinaryFromReader);
      msg.addTxs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.BatchTxs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.BatchTxs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.BatchTxs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BatchTxs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getTxsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.xuperchain.TxStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.BatchTxs.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.BatchTxs} returns this
*/
proto.xuperchain.BatchTxs.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.BatchTxs} returns this
 */
proto.xuperchain.BatchTxs.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.BatchTxs.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated TxStatus Txs = 2;
 * @return {!Array<!proto.xuperchain.TxStatus>}
 */
proto.xuperchain.BatchTxs.prototype.getTxsList = function() {
  return /** @type{!Array<!proto.xuperchain.TxStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TxStatus, 2));
};


/**
 * @param {!Array<!proto.xuperchain.TxStatus>} value
 * @return {!proto.xuperchain.BatchTxs} returns this
*/
proto.xuperchain.BatchTxs.prototype.setTxsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.xuperchain.TxStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TxStatus}
 */
proto.xuperchain.BatchTxs.prototype.addTxs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.xuperchain.TxStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.BatchTxs} returns this
 */
proto.xuperchain.BatchTxs.prototype.clearTxsList = function() {
  return this.setTxsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.Block.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.Block.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.Block} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.Block.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    blockid: msg.getBlockid_asB64(),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    block: (f = msg.getBlock()) && proto.xuperchain.InternalBlock.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.Block}
 */
proto.xuperchain.Block.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.Block;
  return proto.xuperchain.Block.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.Block} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.Block}
 */
proto.xuperchain.Block.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockid(value);
      break;
    case 4:
      var value = /** @type {!proto.xuperchain.Block.EBlockStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = new proto.xuperchain.InternalBlock;
      reader.readMessage(value,proto.xuperchain.InternalBlock.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.Block.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.Block.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.Block} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.Block.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBlockid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.xuperchain.InternalBlock.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.xuperchain.Block.EBlockStatus = {
  ERROR: 0,
  TRUNK: 1,
  BRANCH: 2,
  NOEXIST: 3
};

/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.Block.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.Block} returns this
*/
proto.xuperchain.Block.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.Block} returns this
 */
proto.xuperchain.Block.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.Block.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.Block.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.Block} returns this
 */
proto.xuperchain.Block.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes blockid = 3;
 * @return {string}
 */
proto.xuperchain.Block.prototype.getBlockid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes blockid = 3;
 * This is a type-conversion wrapper around `getBlockid()`
 * @return {string}
 */
proto.xuperchain.Block.prototype.getBlockid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockid()));
};


/**
 * optional bytes blockid = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.Block.prototype.getBlockid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.Block} returns this
 */
proto.xuperchain.Block.prototype.setBlockid = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional EBlockStatus status = 4;
 * @return {!proto.xuperchain.Block.EBlockStatus}
 */
proto.xuperchain.Block.prototype.getStatus = function() {
  return /** @type {!proto.xuperchain.Block.EBlockStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.xuperchain.Block.EBlockStatus} value
 * @return {!proto.xuperchain.Block} returns this
 */
proto.xuperchain.Block.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional InternalBlock block = 5;
 * @return {?proto.xuperchain.InternalBlock}
 */
proto.xuperchain.Block.prototype.getBlock = function() {
  return /** @type{?proto.xuperchain.InternalBlock} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.InternalBlock, 5));
};


/**
 * @param {?proto.xuperchain.InternalBlock|undefined} value
 * @return {!proto.xuperchain.Block} returns this
*/
proto.xuperchain.Block.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.Block} returns this
 */
proto.xuperchain.Block.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.Block.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.BlockID.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.BlockID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.BlockID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BlockID.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blockid: msg.getBlockid_asB64(),
    needContent: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.BlockID}
 */
proto.xuperchain.BlockID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.BlockID;
  return proto.xuperchain.BlockID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.BlockID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.BlockID}
 */
proto.xuperchain.BlockID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeedContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.BlockID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.BlockID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.BlockID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BlockID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlockid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getNeedContent();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Header header = 4;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.BlockID.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 4));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.BlockID} returns this
*/
proto.xuperchain.BlockID.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.BlockID} returns this
 */
proto.xuperchain.BlockID.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.BlockID.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string bcname = 1;
 * @return {string}
 */
proto.xuperchain.BlockID.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.BlockID} returns this
 */
proto.xuperchain.BlockID.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes blockid = 2;
 * @return {string}
 */
proto.xuperchain.BlockID.prototype.getBlockid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes blockid = 2;
 * This is a type-conversion wrapper around `getBlockid()`
 * @return {string}
 */
proto.xuperchain.BlockID.prototype.getBlockid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockid()));
};


/**
 * optional bytes blockid = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.BlockID.prototype.getBlockid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.BlockID} returns this
 */
proto.xuperchain.BlockID.prototype.setBlockid = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool need_content = 3;
 * @return {boolean}
 */
proto.xuperchain.BlockID.prototype.getNeedContent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.BlockID} returns this
 */
proto.xuperchain.BlockID.prototype.setNeedContent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.BlockHeight.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.BlockHeight.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.BlockHeight} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BlockHeight.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.BlockHeight}
 */
proto.xuperchain.BlockHeight.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.BlockHeight;
  return proto.xuperchain.BlockHeight.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.BlockHeight} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.BlockHeight}
 */
proto.xuperchain.BlockHeight.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.BlockHeight.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.BlockHeight.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.BlockHeight} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BlockHeight.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional Header header = 3;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.BlockHeight.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 3));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.BlockHeight} returns this
*/
proto.xuperchain.BlockHeight.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.BlockHeight} returns this
 */
proto.xuperchain.BlockHeight.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.BlockHeight.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string bcname = 1;
 * @return {string}
 */
proto.xuperchain.BlockHeight.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.BlockHeight} returns this
 */
proto.xuperchain.BlockHeight.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 height = 2;
 * @return {number}
 */
proto.xuperchain.BlockHeight.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.BlockHeight} returns this
 */
proto.xuperchain.BlockHeight.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.TokenDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.TokenDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.TokenDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TokenDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    bcname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 2, ""),
    error: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.TokenDetail}
 */
proto.xuperchain.TokenDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.TokenDetail;
  return proto.xuperchain.TokenDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.TokenDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.TokenDetail}
 */
proto.xuperchain.TokenDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBalance(value);
      break;
    case 3:
      var value = /** @type {!proto.xuperchain.XChainErrorEnum} */ (reader.readEnum());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.TokenDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.TokenDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.TokenDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TokenDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getError();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string bcname = 1;
 * @return {string}
 */
proto.xuperchain.TokenDetail.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TokenDetail} returns this
 */
proto.xuperchain.TokenDetail.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string balance = 2;
 * @return {string}
 */
proto.xuperchain.TokenDetail.prototype.getBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TokenDetail} returns this
 */
proto.xuperchain.TokenDetail.prototype.setBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional XChainErrorEnum error = 3;
 * @return {!proto.xuperchain.XChainErrorEnum}
 */
proto.xuperchain.TokenDetail.prototype.getError = function() {
  return /** @type {!proto.xuperchain.XChainErrorEnum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.xuperchain.XChainErrorEnum} value
 * @return {!proto.xuperchain.TokenDetail} returns this
 */
proto.xuperchain.TokenDetail.prototype.setError = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.AddressStatus.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.AddressStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.AddressStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.AddressStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AddressStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bcsList: jspb.Message.toObjectList(msg.getBcsList(),
    proto.xuperchain.TokenDetail.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.AddressStatus}
 */
proto.xuperchain.AddressStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.AddressStatus;
  return proto.xuperchain.AddressStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.AddressStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.AddressStatus}
 */
proto.xuperchain.AddressStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = new proto.xuperchain.TokenDetail;
      reader.readMessage(value,proto.xuperchain.TokenDetail.deserializeBinaryFromReader);
      msg.addBcs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.AddressStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.AddressStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.AddressStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AddressStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBcsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.xuperchain.TokenDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.AddressStatus.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.AddressStatus} returns this
*/
proto.xuperchain.AddressStatus.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.AddressStatus} returns this
 */
proto.xuperchain.AddressStatus.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.AddressStatus.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.xuperchain.AddressStatus.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.AddressStatus} returns this
 */
proto.xuperchain.AddressStatus.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated TokenDetail bcs = 3;
 * @return {!Array<!proto.xuperchain.TokenDetail>}
 */
proto.xuperchain.AddressStatus.prototype.getBcsList = function() {
  return /** @type{!Array<!proto.xuperchain.TokenDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TokenDetail, 3));
};


/**
 * @param {!Array<!proto.xuperchain.TokenDetail>} value
 * @return {!proto.xuperchain.AddressStatus} returns this
*/
proto.xuperchain.AddressStatus.prototype.setBcsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.xuperchain.TokenDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TokenDetail}
 */
proto.xuperchain.AddressStatus.prototype.addBcs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.xuperchain.TokenDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.AddressStatus} returns this
 */
proto.xuperchain.AddressStatus.prototype.clearBcsList = function() {
  return this.setBcsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.TokenFrozenDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.TokenFrozenDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.TokenFrozenDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TokenFrozenDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    balance: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isfrozen: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.TokenFrozenDetail}
 */
proto.xuperchain.TokenFrozenDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.TokenFrozenDetail;
  return proto.xuperchain.TokenFrozenDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.TokenFrozenDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.TokenFrozenDetail}
 */
proto.xuperchain.TokenFrozenDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBalance(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsfrozen(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.TokenFrozenDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.TokenFrozenDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.TokenFrozenDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TokenFrozenDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalance();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsfrozen();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string balance = 1;
 * @return {string}
 */
proto.xuperchain.TokenFrozenDetail.prototype.getBalance = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TokenFrozenDetail} returns this
 */
proto.xuperchain.TokenFrozenDetail.prototype.setBalance = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool isFrozen = 2;
 * @return {boolean}
 */
proto.xuperchain.TokenFrozenDetail.prototype.getIsfrozen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.TokenFrozenDetail} returns this
 */
proto.xuperchain.TokenFrozenDetail.prototype.setIsfrozen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.TokenFrozenDetails.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.TokenFrozenDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.TokenFrozenDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.TokenFrozenDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TokenFrozenDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    bcname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tfdList: jspb.Message.toObjectList(msg.getTfdList(),
    proto.xuperchain.TokenFrozenDetail.toObject, includeInstance),
    error: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.TokenFrozenDetails}
 */
proto.xuperchain.TokenFrozenDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.TokenFrozenDetails;
  return proto.xuperchain.TokenFrozenDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.TokenFrozenDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.TokenFrozenDetails}
 */
proto.xuperchain.TokenFrozenDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 2:
      var value = new proto.xuperchain.TokenFrozenDetail;
      reader.readMessage(value,proto.xuperchain.TokenFrozenDetail.deserializeBinaryFromReader);
      msg.addTfd(value);
      break;
    case 3:
      var value = /** @type {!proto.xuperchain.XChainErrorEnum} */ (reader.readEnum());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.TokenFrozenDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.TokenFrozenDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.TokenFrozenDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TokenFrozenDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTfdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.xuperchain.TokenFrozenDetail.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string bcname = 1;
 * @return {string}
 */
proto.xuperchain.TokenFrozenDetails.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TokenFrozenDetails} returns this
 */
proto.xuperchain.TokenFrozenDetails.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated TokenFrozenDetail tfd = 2;
 * @return {!Array<!proto.xuperchain.TokenFrozenDetail>}
 */
proto.xuperchain.TokenFrozenDetails.prototype.getTfdList = function() {
  return /** @type{!Array<!proto.xuperchain.TokenFrozenDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TokenFrozenDetail, 2));
};


/**
 * @param {!Array<!proto.xuperchain.TokenFrozenDetail>} value
 * @return {!proto.xuperchain.TokenFrozenDetails} returns this
*/
proto.xuperchain.TokenFrozenDetails.prototype.setTfdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.xuperchain.TokenFrozenDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TokenFrozenDetail}
 */
proto.xuperchain.TokenFrozenDetails.prototype.addTfd = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.xuperchain.TokenFrozenDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.TokenFrozenDetails} returns this
 */
proto.xuperchain.TokenFrozenDetails.prototype.clearTfdList = function() {
  return this.setTfdList([]);
};


/**
 * optional XChainErrorEnum error = 3;
 * @return {!proto.xuperchain.XChainErrorEnum}
 */
proto.xuperchain.TokenFrozenDetails.prototype.getError = function() {
  return /** @type {!proto.xuperchain.XChainErrorEnum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.xuperchain.XChainErrorEnum} value
 * @return {!proto.xuperchain.TokenFrozenDetails} returns this
 */
proto.xuperchain.TokenFrozenDetails.prototype.setError = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.AddressBalanceStatus.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.AddressBalanceStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.AddressBalanceStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.AddressBalanceStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AddressBalanceStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    address: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tfdsList: jspb.Message.toObjectList(msg.getTfdsList(),
    proto.xuperchain.TokenFrozenDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.AddressBalanceStatus}
 */
proto.xuperchain.AddressBalanceStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.AddressBalanceStatus;
  return proto.xuperchain.AddressBalanceStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.AddressBalanceStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.AddressBalanceStatus}
 */
proto.xuperchain.AddressBalanceStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 3:
      var value = new proto.xuperchain.TokenFrozenDetails;
      reader.readMessage(value,proto.xuperchain.TokenFrozenDetails.deserializeBinaryFromReader);
      msg.addTfds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.AddressBalanceStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.AddressBalanceStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.AddressBalanceStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AddressBalanceStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTfdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.xuperchain.TokenFrozenDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.AddressBalanceStatus.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.AddressBalanceStatus} returns this
*/
proto.xuperchain.AddressBalanceStatus.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.AddressBalanceStatus} returns this
 */
proto.xuperchain.AddressBalanceStatus.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.AddressBalanceStatus.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.xuperchain.AddressBalanceStatus.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.AddressBalanceStatus} returns this
 */
proto.xuperchain.AddressBalanceStatus.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated TokenFrozenDetails tfds = 3;
 * @return {!Array<!proto.xuperchain.TokenFrozenDetails>}
 */
proto.xuperchain.AddressBalanceStatus.prototype.getTfdsList = function() {
  return /** @type{!Array<!proto.xuperchain.TokenFrozenDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TokenFrozenDetails, 3));
};


/**
 * @param {!Array<!proto.xuperchain.TokenFrozenDetails>} value
 * @return {!proto.xuperchain.AddressBalanceStatus} returns this
*/
proto.xuperchain.AddressBalanceStatus.prototype.setTfdsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.xuperchain.TokenFrozenDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TokenFrozenDetails}
 */
proto.xuperchain.AddressBalanceStatus.prototype.addTfds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.xuperchain.TokenFrozenDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.AddressBalanceStatus} returns this
 */
proto.xuperchain.AddressBalanceStatus.prototype.clearTfdsList = function() {
  return this.setTfdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.TxInput.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.TxInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.TxInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    refTxid: msg.getRefTxid_asB64(),
    refOffset: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fromAddr: msg.getFromAddr_asB64(),
    amount: msg.getAmount_asB64(),
    frozenHeight: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.TxInput}
 */
proto.xuperchain.TxInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.TxInput;
  return proto.xuperchain.TxInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.TxInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.TxInput}
 */
proto.xuperchain.TxInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRefTxid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRefOffset(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFromAddr(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrozenHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.TxInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.TxInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.TxInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefTxid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRefOffset();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFromAddr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getAmount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getFrozenHeight();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional bytes ref_txid = 1;
 * @return {string}
 */
proto.xuperchain.TxInput.prototype.getRefTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes ref_txid = 1;
 * This is a type-conversion wrapper around `getRefTxid()`
 * @return {string}
 */
proto.xuperchain.TxInput.prototype.getRefTxid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRefTxid()));
};


/**
 * optional bytes ref_txid = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRefTxid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxInput.prototype.getRefTxid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRefTxid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxInput} returns this
 */
proto.xuperchain.TxInput.prototype.setRefTxid = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 ref_offset = 2;
 * @return {number}
 */
proto.xuperchain.TxInput.prototype.getRefOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.TxInput} returns this
 */
proto.xuperchain.TxInput.prototype.setRefOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes from_addr = 5;
 * @return {string}
 */
proto.xuperchain.TxInput.prototype.getFromAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes from_addr = 5;
 * This is a type-conversion wrapper around `getFromAddr()`
 * @return {string}
 */
proto.xuperchain.TxInput.prototype.getFromAddr_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFromAddr()));
};


/**
 * optional bytes from_addr = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFromAddr()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxInput.prototype.getFromAddr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFromAddr()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxInput} returns this
 */
proto.xuperchain.TxInput.prototype.setFromAddr = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes amount = 6;
 * @return {string}
 */
proto.xuperchain.TxInput.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes amount = 6;
 * This is a type-conversion wrapper around `getAmount()`
 * @return {string}
 */
proto.xuperchain.TxInput.prototype.getAmount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAmount()));
};


/**
 * optional bytes amount = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAmount()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxInput.prototype.getAmount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAmount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxInput} returns this
 */
proto.xuperchain.TxInput.prototype.setAmount = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional int64 frozen_height = 7;
 * @return {number}
 */
proto.xuperchain.TxInput.prototype.getFrozenHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.TxInput} returns this
 */
proto.xuperchain.TxInput.prototype.setFrozenHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.TxOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.TxOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.TxOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: msg.getAmount_asB64(),
    toAddr: msg.getToAddr_asB64(),
    frozenHeight: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.TxOutput}
 */
proto.xuperchain.TxOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.TxOutput;
  return proto.xuperchain.TxOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.TxOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.TxOutput}
 */
proto.xuperchain.TxOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setToAddr(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrozenHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.TxOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.TxOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.TxOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getToAddr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getFrozenHeight();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional bytes amount = 1;
 * @return {string}
 */
proto.xuperchain.TxOutput.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes amount = 1;
 * This is a type-conversion wrapper around `getAmount()`
 * @return {string}
 */
proto.xuperchain.TxOutput.prototype.getAmount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAmount()));
};


/**
 * optional bytes amount = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAmount()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxOutput.prototype.getAmount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAmount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxOutput} returns this
 */
proto.xuperchain.TxOutput.prototype.setAmount = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes to_addr = 2;
 * @return {string}
 */
proto.xuperchain.TxOutput.prototype.getToAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes to_addr = 2;
 * This is a type-conversion wrapper around `getToAddr()`
 * @return {string}
 */
proto.xuperchain.TxOutput.prototype.getToAddr_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getToAddr()));
};


/**
 * optional bytes to_addr = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getToAddr()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxOutput.prototype.getToAddr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getToAddr()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxOutput} returns this
 */
proto.xuperchain.TxOutput.prototype.setToAddr = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 frozen_height = 4;
 * @return {number}
 */
proto.xuperchain.TxOutput.prototype.getFrozenHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.TxOutput} returns this
 */
proto.xuperchain.TxOutput.prototype.setFrozenHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.XuperSignature.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.XuperSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.XuperSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.XuperSignature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.XuperSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKeysList: msg.getPublicKeysList_asB64(),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.XuperSignature}
 */
proto.xuperchain.XuperSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.XuperSignature;
  return proto.xuperchain.XuperSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.XuperSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.XuperSignature}
 */
proto.xuperchain.XuperSignature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addPublicKeys(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.XuperSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.XuperSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.XuperSignature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.XuperSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKeysList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * repeated bytes public_keys = 1;
 * @return {!Array<string>}
 */
proto.xuperchain.XuperSignature.prototype.getPublicKeysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes public_keys = 1;
 * This is a type-conversion wrapper around `getPublicKeysList()`
 * @return {!Array<string>}
 */
proto.xuperchain.XuperSignature.prototype.getPublicKeysList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getPublicKeysList()));
};


/**
 * repeated bytes public_keys = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKeysList()`
 * @return {!Array<!Uint8Array>}
 */
proto.xuperchain.XuperSignature.prototype.getPublicKeysList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getPublicKeysList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.xuperchain.XuperSignature} returns this
 */
proto.xuperchain.XuperSignature.prototype.setPublicKeysList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.XuperSignature} returns this
 */
proto.xuperchain.XuperSignature.prototype.addPublicKeys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.XuperSignature} returns this
 */
proto.xuperchain.XuperSignature.prototype.clearPublicKeysList = function() {
  return this.setPublicKeysList([]);
};


/**
 * optional bytes signature = 2;
 * @return {string}
 */
proto.xuperchain.XuperSignature.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.xuperchain.XuperSignature.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.xuperchain.XuperSignature.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.XuperSignature} returns this
 */
proto.xuperchain.XuperSignature.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.Transaction.repeatedFields_ = [3,4,23,24,25,27,28,29];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    txid: msg.getTxid_asB64(),
    blockid: msg.getBlockid_asB64(),
    txInputsList: jspb.Message.toObjectList(msg.getTxInputsList(),
    proto.xuperchain.TxInput.toObject, includeInstance),
    txOutputsList: jspb.Message.toObjectList(msg.getTxOutputsList(),
    proto.xuperchain.TxOutput.toObject, includeInstance),
    desc: msg.getDesc_asB64(),
    coinbase: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    nonce: jspb.Message.getFieldWithDefault(msg, 8, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 9, 0),
    version: jspb.Message.getFieldWithDefault(msg, 10, 0),
    autogen: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    txInputsExtList: jspb.Message.toObjectList(msg.getTxInputsExtList(),
    proto.xuperchain.TxInputExt.toObject, includeInstance),
    txOutputsExtList: jspb.Message.toObjectList(msg.getTxOutputsExtList(),
    proto.xuperchain.TxOutputExt.toObject, includeInstance),
    contractRequestsList: jspb.Message.toObjectList(msg.getContractRequestsList(),
    proto.xuperchain.InvokeRequest.toObject, includeInstance),
    initiator: jspb.Message.getFieldWithDefault(msg, 26, ""),
    authRequireList: (f = jspb.Message.getRepeatedField(msg, 27)) == null ? undefined : f,
    initiatorSignsList: jspb.Message.toObjectList(msg.getInitiatorSignsList(),
    proto.xuperchain.SignatureInfo.toObject, includeInstance),
    authRequireSignsList: jspb.Message.toObjectList(msg.getAuthRequireSignsList(),
    proto.xuperchain.SignatureInfo.toObject, includeInstance),
    receivedTimestamp: jspb.Message.getFieldWithDefault(msg, 30, 0),
    xuperSign: (f = msg.getXuperSign()) && proto.xuperchain.XuperSignature.toObject(includeInstance, f),
    modifyBlock: (f = msg.getModifyBlock()) && proto.xuperchain.ModifyBlock.toObject(includeInstance, f),
    hdInfo: (f = msg.getHdInfo()) && proto.xuperchain.HDInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.Transaction}
 */
proto.xuperchain.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.Transaction;
  return proto.xuperchain.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.Transaction}
 */
proto.xuperchain.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTxid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockid(value);
      break;
    case 3:
      var value = new proto.xuperchain.TxInput;
      reader.readMessage(value,proto.xuperchain.TxInput.deserializeBinaryFromReader);
      msg.addTxInputs(value);
      break;
    case 4:
      var value = new proto.xuperchain.TxOutput;
      reader.readMessage(value,proto.xuperchain.TxOutput.deserializeBinaryFromReader);
      msg.addTxOutputs(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDesc(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCoinbase(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setNonce(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutogen(value);
      break;
    case 23:
      var value = new proto.xuperchain.TxInputExt;
      reader.readMessage(value,proto.xuperchain.TxInputExt.deserializeBinaryFromReader);
      msg.addTxInputsExt(value);
      break;
    case 24:
      var value = new proto.xuperchain.TxOutputExt;
      reader.readMessage(value,proto.xuperchain.TxOutputExt.deserializeBinaryFromReader);
      msg.addTxOutputsExt(value);
      break;
    case 25:
      var value = new proto.xuperchain.InvokeRequest;
      reader.readMessage(value,proto.xuperchain.InvokeRequest.deserializeBinaryFromReader);
      msg.addContractRequests(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitiator(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.addAuthRequire(value);
      break;
    case 28:
      var value = new proto.xuperchain.SignatureInfo;
      reader.readMessage(value,proto.xuperchain.SignatureInfo.deserializeBinaryFromReader);
      msg.addInitiatorSigns(value);
      break;
    case 29:
      var value = new proto.xuperchain.SignatureInfo;
      reader.readMessage(value,proto.xuperchain.SignatureInfo.deserializeBinaryFromReader);
      msg.addAuthRequireSigns(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReceivedTimestamp(value);
      break;
    case 31:
      var value = new proto.xuperchain.XuperSignature;
      reader.readMessage(value,proto.xuperchain.XuperSignature.deserializeBinaryFromReader);
      msg.setXuperSign(value);
      break;
    case 32:
      var value = new proto.xuperchain.ModifyBlock;
      reader.readMessage(value,proto.xuperchain.ModifyBlock.deserializeBinaryFromReader);
      msg.setModifyBlock(value);
      break;
    case 33:
      var value = new proto.xuperchain.HDInfo;
      reader.readMessage(value,proto.xuperchain.HDInfo.deserializeBinaryFromReader);
      msg.setHdInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBlockid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getTxInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.xuperchain.TxInput.serializeBinaryToWriter
    );
  }
  f = message.getTxOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.xuperchain.TxOutput.serializeBinaryToWriter
    );
  }
  f = message.getDesc_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getCoinbase();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getNonce();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getAutogen();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getTxInputsExtList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      23,
      f,
      proto.xuperchain.TxInputExt.serializeBinaryToWriter
    );
  }
  f = message.getTxOutputsExtList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      proto.xuperchain.TxOutputExt.serializeBinaryToWriter
    );
  }
  f = message.getContractRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      25,
      f,
      proto.xuperchain.InvokeRequest.serializeBinaryToWriter
    );
  }
  f = message.getInitiator();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getAuthRequireList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      27,
      f
    );
  }
  f = message.getInitiatorSignsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      28,
      f,
      proto.xuperchain.SignatureInfo.serializeBinaryToWriter
    );
  }
  f = message.getAuthRequireSignsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      29,
      f,
      proto.xuperchain.SignatureInfo.serializeBinaryToWriter
    );
  }
  f = message.getReceivedTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      30,
      f
    );
  }
  f = message.getXuperSign();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.xuperchain.XuperSignature.serializeBinaryToWriter
    );
  }
  f = message.getModifyBlock();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.xuperchain.ModifyBlock.serializeBinaryToWriter
    );
  }
  f = message.getHdInfo();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.xuperchain.HDInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes txid = 1;
 * @return {string}
 */
proto.xuperchain.Transaction.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes txid = 1;
 * This is a type-conversion wrapper around `getTxid()`
 * @return {string}
 */
proto.xuperchain.Transaction.prototype.getTxid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTxid()));
};


/**
 * optional bytes txid = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.Transaction.prototype.getTxid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTxid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.setTxid = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes blockid = 2;
 * @return {string}
 */
proto.xuperchain.Transaction.prototype.getBlockid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes blockid = 2;
 * This is a type-conversion wrapper around `getBlockid()`
 * @return {string}
 */
proto.xuperchain.Transaction.prototype.getBlockid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockid()));
};


/**
 * optional bytes blockid = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.Transaction.prototype.getBlockid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.setBlockid = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * repeated TxInput tx_inputs = 3;
 * @return {!Array<!proto.xuperchain.TxInput>}
 */
proto.xuperchain.Transaction.prototype.getTxInputsList = function() {
  return /** @type{!Array<!proto.xuperchain.TxInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TxInput, 3));
};


/**
 * @param {!Array<!proto.xuperchain.TxInput>} value
 * @return {!proto.xuperchain.Transaction} returns this
*/
proto.xuperchain.Transaction.prototype.setTxInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.xuperchain.TxInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TxInput}
 */
proto.xuperchain.Transaction.prototype.addTxInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.xuperchain.TxInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.clearTxInputsList = function() {
  return this.setTxInputsList([]);
};


/**
 * repeated TxOutput tx_outputs = 4;
 * @return {!Array<!proto.xuperchain.TxOutput>}
 */
proto.xuperchain.Transaction.prototype.getTxOutputsList = function() {
  return /** @type{!Array<!proto.xuperchain.TxOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TxOutput, 4));
};


/**
 * @param {!Array<!proto.xuperchain.TxOutput>} value
 * @return {!proto.xuperchain.Transaction} returns this
*/
proto.xuperchain.Transaction.prototype.setTxOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.xuperchain.TxOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TxOutput}
 */
proto.xuperchain.Transaction.prototype.addTxOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.xuperchain.TxOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.clearTxOutputsList = function() {
  return this.setTxOutputsList([]);
};


/**
 * optional bytes desc = 6;
 * @return {string}
 */
proto.xuperchain.Transaction.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes desc = 6;
 * This is a type-conversion wrapper around `getDesc()`
 * @return {string}
 */
proto.xuperchain.Transaction.prototype.getDesc_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDesc()));
};


/**
 * optional bytes desc = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDesc()`
 * @return {!Uint8Array}
 */
proto.xuperchain.Transaction.prototype.getDesc_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDesc()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.setDesc = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bool coinbase = 7;
 * @return {boolean}
 */
proto.xuperchain.Transaction.prototype.getCoinbase = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.setCoinbase = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string nonce = 8;
 * @return {string}
 */
proto.xuperchain.Transaction.prototype.getNonce = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.setNonce = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 timestamp = 9;
 * @return {number}
 */
proto.xuperchain.Transaction.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 version = 10;
 * @return {number}
 */
proto.xuperchain.Transaction.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool autogen = 11;
 * @return {boolean}
 */
proto.xuperchain.Transaction.prototype.getAutogen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.setAutogen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * repeated TxInputExt tx_inputs_ext = 23;
 * @return {!Array<!proto.xuperchain.TxInputExt>}
 */
proto.xuperchain.Transaction.prototype.getTxInputsExtList = function() {
  return /** @type{!Array<!proto.xuperchain.TxInputExt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TxInputExt, 23));
};


/**
 * @param {!Array<!proto.xuperchain.TxInputExt>} value
 * @return {!proto.xuperchain.Transaction} returns this
*/
proto.xuperchain.Transaction.prototype.setTxInputsExtList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 23, value);
};


/**
 * @param {!proto.xuperchain.TxInputExt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TxInputExt}
 */
proto.xuperchain.Transaction.prototype.addTxInputsExt = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 23, opt_value, proto.xuperchain.TxInputExt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.clearTxInputsExtList = function() {
  return this.setTxInputsExtList([]);
};


/**
 * repeated TxOutputExt tx_outputs_ext = 24;
 * @return {!Array<!proto.xuperchain.TxOutputExt>}
 */
proto.xuperchain.Transaction.prototype.getTxOutputsExtList = function() {
  return /** @type{!Array<!proto.xuperchain.TxOutputExt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TxOutputExt, 24));
};


/**
 * @param {!Array<!proto.xuperchain.TxOutputExt>} value
 * @return {!proto.xuperchain.Transaction} returns this
*/
proto.xuperchain.Transaction.prototype.setTxOutputsExtList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.xuperchain.TxOutputExt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TxOutputExt}
 */
proto.xuperchain.Transaction.prototype.addTxOutputsExt = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.xuperchain.TxOutputExt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.clearTxOutputsExtList = function() {
  return this.setTxOutputsExtList([]);
};


/**
 * repeated InvokeRequest contract_requests = 25;
 * @return {!Array<!proto.xuperchain.InvokeRequest>}
 */
proto.xuperchain.Transaction.prototype.getContractRequestsList = function() {
  return /** @type{!Array<!proto.xuperchain.InvokeRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.InvokeRequest, 25));
};


/**
 * @param {!Array<!proto.xuperchain.InvokeRequest>} value
 * @return {!proto.xuperchain.Transaction} returns this
*/
proto.xuperchain.Transaction.prototype.setContractRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 25, value);
};


/**
 * @param {!proto.xuperchain.InvokeRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.InvokeRequest}
 */
proto.xuperchain.Transaction.prototype.addContractRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 25, opt_value, proto.xuperchain.InvokeRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.clearContractRequestsList = function() {
  return this.setContractRequestsList([]);
};


/**
 * optional string initiator = 26;
 * @return {string}
 */
proto.xuperchain.Transaction.prototype.getInitiator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.setInitiator = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * repeated string auth_require = 27;
 * @return {!Array<string>}
 */
proto.xuperchain.Transaction.prototype.getAuthRequireList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 27));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.setAuthRequireList = function(value) {
  return jspb.Message.setField(this, 27, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.addAuthRequire = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 27, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.clearAuthRequireList = function() {
  return this.setAuthRequireList([]);
};


/**
 * repeated SignatureInfo initiator_signs = 28;
 * @return {!Array<!proto.xuperchain.SignatureInfo>}
 */
proto.xuperchain.Transaction.prototype.getInitiatorSignsList = function() {
  return /** @type{!Array<!proto.xuperchain.SignatureInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.SignatureInfo, 28));
};


/**
 * @param {!Array<!proto.xuperchain.SignatureInfo>} value
 * @return {!proto.xuperchain.Transaction} returns this
*/
proto.xuperchain.Transaction.prototype.setInitiatorSignsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 28, value);
};


/**
 * @param {!proto.xuperchain.SignatureInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.SignatureInfo}
 */
proto.xuperchain.Transaction.prototype.addInitiatorSigns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 28, opt_value, proto.xuperchain.SignatureInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.clearInitiatorSignsList = function() {
  return this.setInitiatorSignsList([]);
};


/**
 * repeated SignatureInfo auth_require_signs = 29;
 * @return {!Array<!proto.xuperchain.SignatureInfo>}
 */
proto.xuperchain.Transaction.prototype.getAuthRequireSignsList = function() {
  return /** @type{!Array<!proto.xuperchain.SignatureInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.SignatureInfo, 29));
};


/**
 * @param {!Array<!proto.xuperchain.SignatureInfo>} value
 * @return {!proto.xuperchain.Transaction} returns this
*/
proto.xuperchain.Transaction.prototype.setAuthRequireSignsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 29, value);
};


/**
 * @param {!proto.xuperchain.SignatureInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.SignatureInfo}
 */
proto.xuperchain.Transaction.prototype.addAuthRequireSigns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 29, opt_value, proto.xuperchain.SignatureInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.clearAuthRequireSignsList = function() {
  return this.setAuthRequireSignsList([]);
};


/**
 * optional int64 received_timestamp = 30;
 * @return {number}
 */
proto.xuperchain.Transaction.prototype.getReceivedTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.setReceivedTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 30, value);
};


/**
 * optional XuperSignature xuper_sign = 31;
 * @return {?proto.xuperchain.XuperSignature}
 */
proto.xuperchain.Transaction.prototype.getXuperSign = function() {
  return /** @type{?proto.xuperchain.XuperSignature} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.XuperSignature, 31));
};


/**
 * @param {?proto.xuperchain.XuperSignature|undefined} value
 * @return {!proto.xuperchain.Transaction} returns this
*/
proto.xuperchain.Transaction.prototype.setXuperSign = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.clearXuperSign = function() {
  return this.setXuperSign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.Transaction.prototype.hasXuperSign = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional ModifyBlock modify_block = 32;
 * @return {?proto.xuperchain.ModifyBlock}
 */
proto.xuperchain.Transaction.prototype.getModifyBlock = function() {
  return /** @type{?proto.xuperchain.ModifyBlock} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.ModifyBlock, 32));
};


/**
 * @param {?proto.xuperchain.ModifyBlock|undefined} value
 * @return {!proto.xuperchain.Transaction} returns this
*/
proto.xuperchain.Transaction.prototype.setModifyBlock = function(value) {
  return jspb.Message.setWrapperField(this, 32, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.clearModifyBlock = function() {
  return this.setModifyBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.Transaction.prototype.hasModifyBlock = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional HDInfo HD_info = 33;
 * @return {?proto.xuperchain.HDInfo}
 */
proto.xuperchain.Transaction.prototype.getHdInfo = function() {
  return /** @type{?proto.xuperchain.HDInfo} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.HDInfo, 33));
};


/**
 * @param {?proto.xuperchain.HDInfo|undefined} value
 * @return {!proto.xuperchain.Transaction} returns this
*/
proto.xuperchain.Transaction.prototype.setHdInfo = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.Transaction} returns this
 */
proto.xuperchain.Transaction.prototype.clearHdInfo = function() {
  return this.setHdInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.Transaction.prototype.hasHdInfo = function() {
  return jspb.Message.getField(this, 33) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.LedgerMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.LedgerMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.LedgerMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.LedgerMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    rootBlockid: msg.getRootBlockid_asB64(),
    tipBlockid: msg.getTipBlockid_asB64(),
    trunkHeight: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.LedgerMeta}
 */
proto.xuperchain.LedgerMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.LedgerMeta;
  return proto.xuperchain.LedgerMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.LedgerMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.LedgerMeta}
 */
proto.xuperchain.LedgerMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRootBlockid(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTipBlockid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTrunkHeight(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.LedgerMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.LedgerMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.LedgerMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.LedgerMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRootBlockid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTipBlockid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getTrunkHeight();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bytes root_blockid = 1;
 * @return {string}
 */
proto.xuperchain.LedgerMeta.prototype.getRootBlockid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes root_blockid = 1;
 * This is a type-conversion wrapper around `getRootBlockid()`
 * @return {string}
 */
proto.xuperchain.LedgerMeta.prototype.getRootBlockid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRootBlockid()));
};


/**
 * optional bytes root_blockid = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRootBlockid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.LedgerMeta.prototype.getRootBlockid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRootBlockid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.LedgerMeta} returns this
 */
proto.xuperchain.LedgerMeta.prototype.setRootBlockid = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes tip_blockid = 2;
 * @return {string}
 */
proto.xuperchain.LedgerMeta.prototype.getTipBlockid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes tip_blockid = 2;
 * This is a type-conversion wrapper around `getTipBlockid()`
 * @return {string}
 */
proto.xuperchain.LedgerMeta.prototype.getTipBlockid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTipBlockid()));
};


/**
 * optional bytes tip_blockid = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTipBlockid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.LedgerMeta.prototype.getTipBlockid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTipBlockid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.LedgerMeta} returns this
 */
proto.xuperchain.LedgerMeta.prototype.setTipBlockid = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 trunk_height = 3;
 * @return {number}
 */
proto.xuperchain.LedgerMeta.prototype.getTrunkHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.LedgerMeta} returns this
 */
proto.xuperchain.LedgerMeta.prototype.setTrunkHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.UtxoMeta.repeatedFields_ = [2,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.UtxoMeta.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.UtxoMeta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.UtxoMeta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.UtxoMeta.toObject = function(includeInstance, msg) {
  var f, obj = {
    latestBlockid: msg.getLatestBlockid_asB64(),
    lockKeyListList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    utxoTotal: jspb.Message.getFieldWithDefault(msg, 3, ""),
    avgdelay: jspb.Message.getFieldWithDefault(msg, 4, 0),
    unconfirmtxamount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    maxBlockSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    reservedContractsList: jspb.Message.toObjectList(msg.getReservedContractsList(),
    proto.xuperchain.InvokeRequest.toObject, includeInstance),
    forbiddenContract: (f = msg.getForbiddenContract()) && proto.xuperchain.InvokeRequest.toObject(includeInstance, f),
    newAccountResourceAmount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    irreversibleblockheight: jspb.Message.getFieldWithDefault(msg, 10, 0),
    irreversibleslidewindow: jspb.Message.getFieldWithDefault(msg, 11, 0),
    gasprice: (f = msg.getGasprice()) && proto.xuperchain.GasPrice.toObject(includeInstance, f),
    groupChainContract: (f = msg.getGroupChainContract()) && proto.xuperchain.InvokeRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.UtxoMeta}
 */
proto.xuperchain.UtxoMeta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.UtxoMeta;
  return proto.xuperchain.UtxoMeta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.UtxoMeta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.UtxoMeta}
 */
proto.xuperchain.UtxoMeta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setLatestBlockid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLockKeyList(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUtxoTotal(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAvgdelay(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnconfirmtxamount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxBlockSize(value);
      break;
    case 7:
      var value = new proto.xuperchain.InvokeRequest;
      reader.readMessage(value,proto.xuperchain.InvokeRequest.deserializeBinaryFromReader);
      msg.addReservedContracts(value);
      break;
    case 8:
      var value = new proto.xuperchain.InvokeRequest;
      reader.readMessage(value,proto.xuperchain.InvokeRequest.deserializeBinaryFromReader);
      msg.setForbiddenContract(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNewAccountResourceAmount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIrreversibleblockheight(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIrreversibleslidewindow(value);
      break;
    case 12:
      var value = new proto.xuperchain.GasPrice;
      reader.readMessage(value,proto.xuperchain.GasPrice.deserializeBinaryFromReader);
      msg.setGasprice(value);
      break;
    case 13:
      var value = new proto.xuperchain.InvokeRequest;
      reader.readMessage(value,proto.xuperchain.InvokeRequest.deserializeBinaryFromReader);
      msg.setGroupChainContract(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.UtxoMeta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.UtxoMeta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.UtxoMeta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.UtxoMeta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatestBlockid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getLockKeyListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getUtxoTotal();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvgdelay();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getUnconfirmtxamount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getMaxBlockSize();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getReservedContractsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.xuperchain.InvokeRequest.serializeBinaryToWriter
    );
  }
  f = message.getForbiddenContract();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.xuperchain.InvokeRequest.serializeBinaryToWriter
    );
  }
  f = message.getNewAccountResourceAmount();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getIrreversibleblockheight();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getIrreversibleslidewindow();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getGasprice();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.xuperchain.GasPrice.serializeBinaryToWriter
    );
  }
  f = message.getGroupChainContract();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.xuperchain.InvokeRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes latest_blockid = 1;
 * @return {string}
 */
proto.xuperchain.UtxoMeta.prototype.getLatestBlockid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes latest_blockid = 1;
 * This is a type-conversion wrapper around `getLatestBlockid()`
 * @return {string}
 */
proto.xuperchain.UtxoMeta.prototype.getLatestBlockid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getLatestBlockid()));
};


/**
 * optional bytes latest_blockid = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLatestBlockid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.UtxoMeta.prototype.getLatestBlockid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getLatestBlockid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.setLatestBlockid = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string lock_key_list = 2;
 * @return {!Array<string>}
 */
proto.xuperchain.UtxoMeta.prototype.getLockKeyListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.setLockKeyListList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.addLockKeyList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.clearLockKeyListList = function() {
  return this.setLockKeyListList([]);
};


/**
 * optional string utxo_total = 3;
 * @return {string}
 */
proto.xuperchain.UtxoMeta.prototype.getUtxoTotal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.setUtxoTotal = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 avgDelay = 4;
 * @return {number}
 */
proto.xuperchain.UtxoMeta.prototype.getAvgdelay = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.setAvgdelay = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 unconfirmTxAmount = 5;
 * @return {number}
 */
proto.xuperchain.UtxoMeta.prototype.getUnconfirmtxamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.setUnconfirmtxamount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 max_block_size = 6;
 * @return {number}
 */
proto.xuperchain.UtxoMeta.prototype.getMaxBlockSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.setMaxBlockSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated InvokeRequest reserved_contracts = 7;
 * @return {!Array<!proto.xuperchain.InvokeRequest>}
 */
proto.xuperchain.UtxoMeta.prototype.getReservedContractsList = function() {
  return /** @type{!Array<!proto.xuperchain.InvokeRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.InvokeRequest, 7));
};


/**
 * @param {!Array<!proto.xuperchain.InvokeRequest>} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
*/
proto.xuperchain.UtxoMeta.prototype.setReservedContractsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.xuperchain.InvokeRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.InvokeRequest}
 */
proto.xuperchain.UtxoMeta.prototype.addReservedContracts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.xuperchain.InvokeRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.clearReservedContractsList = function() {
  return this.setReservedContractsList([]);
};


/**
 * optional InvokeRequest forbidden_contract = 8;
 * @return {?proto.xuperchain.InvokeRequest}
 */
proto.xuperchain.UtxoMeta.prototype.getForbiddenContract = function() {
  return /** @type{?proto.xuperchain.InvokeRequest} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.InvokeRequest, 8));
};


/**
 * @param {?proto.xuperchain.InvokeRequest|undefined} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
*/
proto.xuperchain.UtxoMeta.prototype.setForbiddenContract = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.clearForbiddenContract = function() {
  return this.setForbiddenContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.UtxoMeta.prototype.hasForbiddenContract = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int64 new_account_resource_amount = 9;
 * @return {number}
 */
proto.xuperchain.UtxoMeta.prototype.getNewAccountResourceAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.setNewAccountResourceAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 irreversibleBlockHeight = 10;
 * @return {number}
 */
proto.xuperchain.UtxoMeta.prototype.getIrreversibleblockheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.setIrreversibleblockheight = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 irreversibleSlideWindow = 11;
 * @return {number}
 */
proto.xuperchain.UtxoMeta.prototype.getIrreversibleslidewindow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.setIrreversibleslidewindow = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional GasPrice gasPrice = 12;
 * @return {?proto.xuperchain.GasPrice}
 */
proto.xuperchain.UtxoMeta.prototype.getGasprice = function() {
  return /** @type{?proto.xuperchain.GasPrice} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.GasPrice, 12));
};


/**
 * @param {?proto.xuperchain.GasPrice|undefined} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
*/
proto.xuperchain.UtxoMeta.prototype.setGasprice = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.clearGasprice = function() {
  return this.setGasprice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.UtxoMeta.prototype.hasGasprice = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional InvokeRequest group_chain_contract = 13;
 * @return {?proto.xuperchain.InvokeRequest}
 */
proto.xuperchain.UtxoMeta.prototype.getGroupChainContract = function() {
  return /** @type{?proto.xuperchain.InvokeRequest} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.InvokeRequest, 13));
};


/**
 * @param {?proto.xuperchain.InvokeRequest|undefined} value
 * @return {!proto.xuperchain.UtxoMeta} returns this
*/
proto.xuperchain.UtxoMeta.prototype.setGroupChainContract = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.UtxoMeta} returns this
 */
proto.xuperchain.UtxoMeta.prototype.clearGroupChainContract = function() {
  return this.setGroupChainContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.UtxoMeta.prototype.hasGroupChainContract = function() {
  return jspb.Message.getField(this, 13) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.GasPrice.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.GasPrice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.GasPrice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.GasPrice.toObject = function(includeInstance, msg) {
  var f, obj = {
    cpuRate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    memRate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    diskRate: jspb.Message.getFieldWithDefault(msg, 3, 0),
    xfeeRate: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.GasPrice}
 */
proto.xuperchain.GasPrice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.GasPrice;
  return proto.xuperchain.GasPrice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.GasPrice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.GasPrice}
 */
proto.xuperchain.GasPrice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCpuRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemRate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDiskRate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setXfeeRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.GasPrice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.GasPrice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.GasPrice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.GasPrice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCpuRate();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMemRate();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDiskRate();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getXfeeRate();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 cpu_rate = 1;
 * @return {number}
 */
proto.xuperchain.GasPrice.prototype.getCpuRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.GasPrice} returns this
 */
proto.xuperchain.GasPrice.prototype.setCpuRate = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 mem_rate = 2;
 * @return {number}
 */
proto.xuperchain.GasPrice.prototype.getMemRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.GasPrice} returns this
 */
proto.xuperchain.GasPrice.prototype.setMemRate = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 disk_rate = 3;
 * @return {number}
 */
proto.xuperchain.GasPrice.prototype.getDiskRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.GasPrice} returns this
 */
proto.xuperchain.GasPrice.prototype.setDiskRate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 xfee_rate = 4;
 * @return {number}
 */
proto.xuperchain.GasPrice.prototype.getXfeeRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.GasPrice} returns this
 */
proto.xuperchain.GasPrice.prototype.setXfeeRate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.InternalBlock.repeatedFields_ = [11,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.InternalBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.InternalBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.InternalBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.InternalBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nonce: jspb.Message.getFieldWithDefault(msg, 2, 0),
    blockid: msg.getBlockid_asB64(),
    preHash: msg.getPreHash_asB64(),
    proposer: msg.getProposer_asB64(),
    sign: msg.getSign_asB64(),
    pubkey: msg.getPubkey_asB64(),
    merkleRoot: msg.getMerkleRoot_asB64(),
    height: jspb.Message.getFieldWithDefault(msg, 9, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 10, 0),
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.xuperchain.Transaction.toObject, includeInstance),
    txCount: jspb.Message.getFieldWithDefault(msg, 12, 0),
    merkleTreeList: msg.getMerkleTreeList_asB64(),
    curterm: jspb.Message.getFieldWithDefault(msg, 16, 0),
    curblocknum: jspb.Message.getFieldWithDefault(msg, 17, 0),
    failedTxsMap: (f = msg.getFailedTxsMap()) ? f.toObject(includeInstance, undefined) : [],
    targetbits: jspb.Message.getFieldWithDefault(msg, 19, 0),
    inTrunk: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    nextHash: msg.getNextHash_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.InternalBlock}
 */
proto.xuperchain.InternalBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.InternalBlock;
  return proto.xuperchain.InternalBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.InternalBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.InternalBlock}
 */
proto.xuperchain.InternalBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNonce(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockid(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPreHash(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProposer(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSign(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubkey(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMerkleRoot(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 11:
      var value = new proto.xuperchain.Transaction;
      reader.readMessage(value,proto.xuperchain.Transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTxCount(value);
      break;
    case 13:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addMerkleTree(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurterm(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCurblocknum(value);
      break;
    case 18:
      var value = msg.getFailedTxsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetbits(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInTrunk(value);
      break;
    case 15:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNextHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.InternalBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.InternalBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.InternalBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.InternalBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getNonce();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBlockid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getPreHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getProposer_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getSign_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getPubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getMerkleRoot_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.xuperchain.Transaction.serializeBinaryToWriter
    );
  }
  f = message.getTxCount();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getMerkleTreeList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      13,
      f
    );
  }
  f = message.getCurterm();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getCurblocknum();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = message.getFailedTxsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(18, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getTargetbits();
  if (f !== 0) {
    writer.writeInt32(
      19,
      f
    );
  }
  f = message.getInTrunk();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getNextHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      15,
      f
    );
  }
};


/**
 * optional int32 version = 1;
 * @return {number}
 */
proto.xuperchain.InternalBlock.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 nonce = 2;
 * @return {number}
 */
proto.xuperchain.InternalBlock.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes blockid = 3;
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getBlockid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes blockid = 3;
 * This is a type-conversion wrapper around `getBlockid()`
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getBlockid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockid()));
};


/**
 * optional bytes blockid = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.InternalBlock.prototype.getBlockid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setBlockid = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes pre_hash = 4;
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getPreHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes pre_hash = 4;
 * This is a type-conversion wrapper around `getPreHash()`
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getPreHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPreHash()));
};


/**
 * optional bytes pre_hash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPreHash()`
 * @return {!Uint8Array}
 */
proto.xuperchain.InternalBlock.prototype.getPreHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPreHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setPreHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes proposer = 5;
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getProposer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes proposer = 5;
 * This is a type-conversion wrapper around `getProposer()`
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getProposer_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProposer()));
};


/**
 * optional bytes proposer = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProposer()`
 * @return {!Uint8Array}
 */
proto.xuperchain.InternalBlock.prototype.getProposer_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProposer()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setProposer = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes sign = 6;
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getSign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes sign = 6;
 * This is a type-conversion wrapper around `getSign()`
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getSign_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSign()));
};


/**
 * optional bytes sign = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSign()`
 * @return {!Uint8Array}
 */
proto.xuperchain.InternalBlock.prototype.getSign_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSign()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setSign = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes pubkey = 7;
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getPubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes pubkey = 7;
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getPubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubkey()));
};


/**
 * optional bytes pubkey = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {!Uint8Array}
 */
proto.xuperchain.InternalBlock.prototype.getPubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setPubkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bytes merkle_root = 8;
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getMerkleRoot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes merkle_root = 8;
 * This is a type-conversion wrapper around `getMerkleRoot()`
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getMerkleRoot_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMerkleRoot()));
};


/**
 * optional bytes merkle_root = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMerkleRoot()`
 * @return {!Uint8Array}
 */
proto.xuperchain.InternalBlock.prototype.getMerkleRoot_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMerkleRoot()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setMerkleRoot = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};


/**
 * optional int64 height = 9;
 * @return {number}
 */
proto.xuperchain.InternalBlock.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 timestamp = 10;
 * @return {number}
 */
proto.xuperchain.InternalBlock.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * repeated Transaction transactions = 11;
 * @return {!Array<!proto.xuperchain.Transaction>}
 */
proto.xuperchain.InternalBlock.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.xuperchain.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.Transaction, 11));
};


/**
 * @param {!Array<!proto.xuperchain.Transaction>} value
 * @return {!proto.xuperchain.InternalBlock} returns this
*/
proto.xuperchain.InternalBlock.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.xuperchain.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.Transaction}
 */
proto.xuperchain.InternalBlock.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.xuperchain.Transaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};


/**
 * optional int32 tx_count = 12;
 * @return {number}
 */
proto.xuperchain.InternalBlock.prototype.getTxCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setTxCount = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * repeated bytes merkle_tree = 13;
 * @return {!Array<string>}
 */
proto.xuperchain.InternalBlock.prototype.getMerkleTreeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * repeated bytes merkle_tree = 13;
 * This is a type-conversion wrapper around `getMerkleTreeList()`
 * @return {!Array<string>}
 */
proto.xuperchain.InternalBlock.prototype.getMerkleTreeList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getMerkleTreeList()));
};


/**
 * repeated bytes merkle_tree = 13;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMerkleTreeList()`
 * @return {!Array<!Uint8Array>}
 */
proto.xuperchain.InternalBlock.prototype.getMerkleTreeList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getMerkleTreeList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setMerkleTreeList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.addMerkleTree = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.clearMerkleTreeList = function() {
  return this.setMerkleTreeList([]);
};


/**
 * optional int64 curTerm = 16;
 * @return {number}
 */
proto.xuperchain.InternalBlock.prototype.getCurterm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setCurterm = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int64 curBlockNum = 17;
 * @return {number}
 */
proto.xuperchain.InternalBlock.prototype.getCurblocknum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setCurblocknum = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * map<string, string> failed_txs = 18;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.xuperchain.InternalBlock.prototype.getFailedTxsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 18, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.clearFailedTxsMap = function() {
  this.getFailedTxsMap().clear();
  return this;};


/**
 * optional int32 targetBits = 19;
 * @return {number}
 */
proto.xuperchain.InternalBlock.prototype.getTargetbits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setTargetbits = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional bool in_trunk = 14;
 * @return {boolean}
 */
proto.xuperchain.InternalBlock.prototype.getInTrunk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setInTrunk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bytes next_hash = 15;
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getNextHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * optional bytes next_hash = 15;
 * This is a type-conversion wrapper around `getNextHash()`
 * @return {string}
 */
proto.xuperchain.InternalBlock.prototype.getNextHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNextHash()));
};


/**
 * optional bytes next_hash = 15;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNextHash()`
 * @return {!Uint8Array}
 */
proto.xuperchain.InternalBlock.prototype.getNextHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNextHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.InternalBlock} returns this
 */
proto.xuperchain.InternalBlock.prototype.setNextHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 15, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.BCStatus.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.BCStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.BCStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.BCStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BCStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    meta: (f = msg.getMeta()) && proto.xuperchain.LedgerMeta.toObject(includeInstance, f),
    block: (f = msg.getBlock()) && proto.xuperchain.InternalBlock.toObject(includeInstance, f),
    utxometa: (f = msg.getUtxometa()) && proto.xuperchain.UtxoMeta.toObject(includeInstance, f),
    branchblockidList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.BCStatus}
 */
proto.xuperchain.BCStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.BCStatus;
  return proto.xuperchain.BCStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.BCStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.BCStatus}
 */
proto.xuperchain.BCStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = new proto.xuperchain.LedgerMeta;
      reader.readMessage(value,proto.xuperchain.LedgerMeta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 4:
      var value = new proto.xuperchain.InternalBlock;
      reader.readMessage(value,proto.xuperchain.InternalBlock.deserializeBinaryFromReader);
      msg.setBlock(value);
      break;
    case 5:
      var value = new proto.xuperchain.UtxoMeta;
      reader.readMessage(value,proto.xuperchain.UtxoMeta.deserializeBinaryFromReader);
      msg.setUtxometa(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addBranchblockid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.BCStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.BCStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.BCStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BCStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.xuperchain.LedgerMeta.serializeBinaryToWriter
    );
  }
  f = message.getBlock();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.xuperchain.InternalBlock.serializeBinaryToWriter
    );
  }
  f = message.getUtxometa();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.xuperchain.UtxoMeta.serializeBinaryToWriter
    );
  }
  f = message.getBranchblockidList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.BCStatus.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.BCStatus} returns this
*/
proto.xuperchain.BCStatus.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.BCStatus} returns this
 */
proto.xuperchain.BCStatus.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.BCStatus.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.BCStatus.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.BCStatus} returns this
 */
proto.xuperchain.BCStatus.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional LedgerMeta meta = 3;
 * @return {?proto.xuperchain.LedgerMeta}
 */
proto.xuperchain.BCStatus.prototype.getMeta = function() {
  return /** @type{?proto.xuperchain.LedgerMeta} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.LedgerMeta, 3));
};


/**
 * @param {?proto.xuperchain.LedgerMeta|undefined} value
 * @return {!proto.xuperchain.BCStatus} returns this
*/
proto.xuperchain.BCStatus.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.BCStatus} returns this
 */
proto.xuperchain.BCStatus.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.BCStatus.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional InternalBlock block = 4;
 * @return {?proto.xuperchain.InternalBlock}
 */
proto.xuperchain.BCStatus.prototype.getBlock = function() {
  return /** @type{?proto.xuperchain.InternalBlock} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.InternalBlock, 4));
};


/**
 * @param {?proto.xuperchain.InternalBlock|undefined} value
 * @return {!proto.xuperchain.BCStatus} returns this
*/
proto.xuperchain.BCStatus.prototype.setBlock = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.BCStatus} returns this
 */
proto.xuperchain.BCStatus.prototype.clearBlock = function() {
  return this.setBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.BCStatus.prototype.hasBlock = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UtxoMeta utxoMeta = 5;
 * @return {?proto.xuperchain.UtxoMeta}
 */
proto.xuperchain.BCStatus.prototype.getUtxometa = function() {
  return /** @type{?proto.xuperchain.UtxoMeta} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.UtxoMeta, 5));
};


/**
 * @param {?proto.xuperchain.UtxoMeta|undefined} value
 * @return {!proto.xuperchain.BCStatus} returns this
*/
proto.xuperchain.BCStatus.prototype.setUtxometa = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.BCStatus} returns this
 */
proto.xuperchain.BCStatus.prototype.clearUtxometa = function() {
  return this.setUtxometa(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.BCStatus.prototype.hasUtxometa = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string branchBlockid = 6;
 * @return {!Array<string>}
 */
proto.xuperchain.BCStatus.prototype.getBranchblockidList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xuperchain.BCStatus} returns this
 */
proto.xuperchain.BCStatus.prototype.setBranchblockidList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.BCStatus} returns this
 */
proto.xuperchain.BCStatus.prototype.addBranchblockid = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.BCStatus} returns this
 */
proto.xuperchain.BCStatus.prototype.clearBranchblockidList = function() {
  return this.setBranchblockidList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.BCTipStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.BCTipStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.BCTipStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BCTipStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    isTrunkTip: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.BCTipStatus}
 */
proto.xuperchain.BCTipStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.BCTipStatus;
  return proto.xuperchain.BCTipStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.BCTipStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.BCTipStatus}
 */
proto.xuperchain.BCTipStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTrunkTip(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.BCTipStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.BCTipStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.BCTipStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BCTipStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getIsTrunkTip();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.BCTipStatus.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.BCTipStatus} returns this
*/
proto.xuperchain.BCTipStatus.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.BCTipStatus} returns this
 */
proto.xuperchain.BCTipStatus.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.BCTipStatus.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_trunk_tip = 2;
 * @return {boolean}
 */
proto.xuperchain.BCTipStatus.prototype.getIsTrunkTip = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.BCTipStatus} returns this
 */
proto.xuperchain.BCTipStatus.prototype.setIsTrunkTip = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.BlockChains.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.BlockChains.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.BlockChains.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.BlockChains} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BlockChains.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    blockchainsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.BlockChains}
 */
proto.xuperchain.BlockChains.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.BlockChains;
  return proto.xuperchain.BlockChains.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.BlockChains} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.BlockChains}
 */
proto.xuperchain.BlockChains.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addBlockchains(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.BlockChains.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.BlockChains.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.BlockChains} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BlockChains.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBlockchainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.BlockChains.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.BlockChains} returns this
*/
proto.xuperchain.BlockChains.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.BlockChains} returns this
 */
proto.xuperchain.BlockChains.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.BlockChains.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string blockchains = 2;
 * @return {!Array<string>}
 */
proto.xuperchain.BlockChains.prototype.getBlockchainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xuperchain.BlockChains} returns this
 */
proto.xuperchain.BlockChains.prototype.setBlockchainsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.BlockChains} returns this
 */
proto.xuperchain.BlockChains.prototype.addBlockchains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.BlockChains} returns this
 */
proto.xuperchain.BlockChains.prototype.clearBlockchainsList = function() {
  return this.setBlockchainsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.Speeds.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.Speeds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.Speeds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.Speeds.toObject = function(includeInstance, msg) {
  var f, obj = {
    sumspeedsMap: (f = msg.getSumspeedsMap()) ? f.toObject(includeInstance, undefined) : [],
    bcspeedsMap: (f = msg.getBcspeedsMap()) ? f.toObject(includeInstance, proto.xuperchain.BCSpeeds.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.Speeds}
 */
proto.xuperchain.Speeds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.Speeds;
  return proto.xuperchain.Speeds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.Speeds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.Speeds}
 */
proto.xuperchain.Speeds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSumspeedsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readDouble, null, "", 0.0);
         });
      break;
    case 2:
      var value = msg.getBcspeedsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.xuperchain.BCSpeeds.deserializeBinaryFromReader, "", new proto.xuperchain.BCSpeeds());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.Speeds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.Speeds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.Speeds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.Speeds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSumspeedsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeDouble);
  }
  f = message.getBcspeedsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.xuperchain.BCSpeeds.serializeBinaryToWriter);
  }
};


/**
 * map<string, double> SumSpeeds = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.xuperchain.Speeds.prototype.getSumspeedsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.xuperchain.Speeds} returns this
 */
proto.xuperchain.Speeds.prototype.clearSumspeedsMap = function() {
  this.getSumspeedsMap().clear();
  return this;};


/**
 * map<string, BCSpeeds> BcSpeeds = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.xuperchain.BCSpeeds>}
 */
proto.xuperchain.Speeds.prototype.getBcspeedsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.xuperchain.BCSpeeds>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.xuperchain.BCSpeeds));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.xuperchain.Speeds} returns this
 */
proto.xuperchain.Speeds.prototype.clearBcspeedsMap = function() {
  this.getBcspeedsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.BCSpeeds.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.BCSpeeds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.BCSpeeds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BCSpeeds.toObject = function(includeInstance, msg) {
  var f, obj = {
    bcspeedMap: (f = msg.getBcspeedMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.BCSpeeds}
 */
proto.xuperchain.BCSpeeds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.BCSpeeds;
  return proto.xuperchain.BCSpeeds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.BCSpeeds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.BCSpeeds}
 */
proto.xuperchain.BCSpeeds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getBcspeedMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readDouble, null, "", 0.0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.BCSpeeds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.BCSpeeds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.BCSpeeds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.BCSpeeds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBcspeedMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeDouble);
  }
};


/**
 * map<string, double> BcSpeed = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.xuperchain.BCSpeeds.prototype.getBcspeedMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.xuperchain.BCSpeeds} returns this
 */
proto.xuperchain.BCSpeeds.prototype.clearBcspeedMap = function() {
  this.getBcspeedMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.SystemsStatus.repeatedFields_ = [2,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.SystemsStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.SystemsStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.SystemsStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.SystemsStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcsStatusList: jspb.Message.toObjectList(msg.getBcsStatusList(),
    proto.xuperchain.BCStatus.toObject, includeInstance),
    speeds: (f = msg.getSpeeds()) && proto.xuperchain.Speeds.toObject(includeInstance, f),
    peerurlsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.SystemsStatus}
 */
proto.xuperchain.SystemsStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.SystemsStatus;
  return proto.xuperchain.SystemsStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.SystemsStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.SystemsStatus}
 */
proto.xuperchain.SystemsStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.xuperchain.BCStatus;
      reader.readMessage(value,proto.xuperchain.BCStatus.deserializeBinaryFromReader);
      msg.addBcsStatus(value);
      break;
    case 3:
      var value = new proto.xuperchain.Speeds;
      reader.readMessage(value,proto.xuperchain.Speeds.deserializeBinaryFromReader);
      msg.setSpeeds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPeerurls(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.SystemsStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.SystemsStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.SystemsStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.SystemsStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcsStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.xuperchain.BCStatus.serializeBinaryToWriter
    );
  }
  f = message.getSpeeds();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.xuperchain.Speeds.serializeBinaryToWriter
    );
  }
  f = message.getPeerurlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.SystemsStatus.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.SystemsStatus} returns this
*/
proto.xuperchain.SystemsStatus.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.SystemsStatus} returns this
 */
proto.xuperchain.SystemsStatus.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.SystemsStatus.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated BCStatus bcs_status = 2;
 * @return {!Array<!proto.xuperchain.BCStatus>}
 */
proto.xuperchain.SystemsStatus.prototype.getBcsStatusList = function() {
  return /** @type{!Array<!proto.xuperchain.BCStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.BCStatus, 2));
};


/**
 * @param {!Array<!proto.xuperchain.BCStatus>} value
 * @return {!proto.xuperchain.SystemsStatus} returns this
*/
proto.xuperchain.SystemsStatus.prototype.setBcsStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.xuperchain.BCStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.BCStatus}
 */
proto.xuperchain.SystemsStatus.prototype.addBcsStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.xuperchain.BCStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.SystemsStatus} returns this
 */
proto.xuperchain.SystemsStatus.prototype.clearBcsStatusList = function() {
  return this.setBcsStatusList([]);
};


/**
 * optional Speeds speeds = 3;
 * @return {?proto.xuperchain.Speeds}
 */
proto.xuperchain.SystemsStatus.prototype.getSpeeds = function() {
  return /** @type{?proto.xuperchain.Speeds} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Speeds, 3));
};


/**
 * @param {?proto.xuperchain.Speeds|undefined} value
 * @return {!proto.xuperchain.SystemsStatus} returns this
*/
proto.xuperchain.SystemsStatus.prototype.setSpeeds = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.SystemsStatus} returns this
 */
proto.xuperchain.SystemsStatus.prototype.clearSpeeds = function() {
  return this.setSpeeds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.SystemsStatus.prototype.hasSpeeds = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string peerUrls = 4;
 * @return {!Array<string>}
 */
proto.xuperchain.SystemsStatus.prototype.getPeerurlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xuperchain.SystemsStatus} returns this
 */
proto.xuperchain.SystemsStatus.prototype.setPeerurlsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.SystemsStatus} returns this
 */
proto.xuperchain.SystemsStatus.prototype.addPeerurls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.SystemsStatus} returns this
 */
proto.xuperchain.SystemsStatus.prototype.clearPeerurlsList = function() {
  return this.setPeerurlsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.SystemsStatusReply.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.SystemsStatusReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.SystemsStatusReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.SystemsStatusReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    systemsStatus: (f = msg.getSystemsStatus()) && proto.xuperchain.SystemsStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.SystemsStatusReply}
 */
proto.xuperchain.SystemsStatusReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.SystemsStatusReply;
  return proto.xuperchain.SystemsStatusReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.SystemsStatusReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.SystemsStatusReply}
 */
proto.xuperchain.SystemsStatusReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.xuperchain.SystemsStatus;
      reader.readMessage(value,proto.xuperchain.SystemsStatus.deserializeBinaryFromReader);
      msg.setSystemsStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.SystemsStatusReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.SystemsStatusReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.SystemsStatusReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.SystemsStatusReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getSystemsStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.xuperchain.SystemsStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.SystemsStatusReply.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.SystemsStatusReply} returns this
*/
proto.xuperchain.SystemsStatusReply.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.SystemsStatusReply} returns this
 */
proto.xuperchain.SystemsStatusReply.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.SystemsStatusReply.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SystemsStatus systems_status = 2;
 * @return {?proto.xuperchain.SystemsStatus}
 */
proto.xuperchain.SystemsStatusReply.prototype.getSystemsStatus = function() {
  return /** @type{?proto.xuperchain.SystemsStatus} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.SystemsStatus, 2));
};


/**
 * @param {?proto.xuperchain.SystemsStatus|undefined} value
 * @return {!proto.xuperchain.SystemsStatusReply} returns this
*/
proto.xuperchain.SystemsStatusReply.prototype.setSystemsStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.SystemsStatusReply} returns this
 */
proto.xuperchain.SystemsStatusReply.prototype.clearSystemsStatus = function() {
  return this.setSystemsStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.SystemsStatusReply.prototype.hasSystemsStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.RawUrl.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.RawUrl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.RawUrl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.RawUrl.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    rawurl: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.RawUrl}
 */
proto.xuperchain.RawUrl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.RawUrl;
  return proto.xuperchain.RawUrl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.RawUrl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.RawUrl}
 */
proto.xuperchain.RawUrl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRawurl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.RawUrl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.RawUrl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.RawUrl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.RawUrl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getRawurl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.RawUrl.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.RawUrl} returns this
*/
proto.xuperchain.RawUrl.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.RawUrl} returns this
 */
proto.xuperchain.RawUrl.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.RawUrl.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string rawUrl = 2;
 * @return {string}
 */
proto.xuperchain.RawUrl.prototype.getRawurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.RawUrl} returns this
 */
proto.xuperchain.RawUrl.prototype.setRawurl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.Utxo.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.Utxo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.Utxo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.Utxo.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: msg.getAmount_asB64(),
    toaddr: msg.getToaddr_asB64(),
    topubkey: msg.getTopubkey_asB64(),
    reftxid: msg.getReftxid_asB64(),
    refoffset: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.Utxo}
 */
proto.xuperchain.Utxo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.Utxo;
  return proto.xuperchain.Utxo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.Utxo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.Utxo}
 */
proto.xuperchain.Utxo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setToaddr(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTopubkey(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReftxid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRefoffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.Utxo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.Utxo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.Utxo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.Utxo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getToaddr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getTopubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getReftxid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getRefoffset();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional bytes amount = 1;
 * @return {string}
 */
proto.xuperchain.Utxo.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes amount = 1;
 * This is a type-conversion wrapper around `getAmount()`
 * @return {string}
 */
proto.xuperchain.Utxo.prototype.getAmount_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAmount()));
};


/**
 * optional bytes amount = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAmount()`
 * @return {!Uint8Array}
 */
proto.xuperchain.Utxo.prototype.getAmount_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAmount()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.Utxo} returns this
 */
proto.xuperchain.Utxo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes toAddr = 2;
 * @return {string}
 */
proto.xuperchain.Utxo.prototype.getToaddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes toAddr = 2;
 * This is a type-conversion wrapper around `getToaddr()`
 * @return {string}
 */
proto.xuperchain.Utxo.prototype.getToaddr_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getToaddr()));
};


/**
 * optional bytes toAddr = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getToaddr()`
 * @return {!Uint8Array}
 */
proto.xuperchain.Utxo.prototype.getToaddr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getToaddr()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.Utxo} returns this
 */
proto.xuperchain.Utxo.prototype.setToaddr = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes toPubkey = 3;
 * @return {string}
 */
proto.xuperchain.Utxo.prototype.getTopubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes toPubkey = 3;
 * This is a type-conversion wrapper around `getTopubkey()`
 * @return {string}
 */
proto.xuperchain.Utxo.prototype.getTopubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTopubkey()));
};


/**
 * optional bytes toPubkey = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTopubkey()`
 * @return {!Uint8Array}
 */
proto.xuperchain.Utxo.prototype.getTopubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTopubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.Utxo} returns this
 */
proto.xuperchain.Utxo.prototype.setTopubkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes refTxid = 4;
 * @return {string}
 */
proto.xuperchain.Utxo.prototype.getReftxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes refTxid = 4;
 * This is a type-conversion wrapper around `getReftxid()`
 * @return {string}
 */
proto.xuperchain.Utxo.prototype.getReftxid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReftxid()));
};


/**
 * optional bytes refTxid = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReftxid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.Utxo.prototype.getReftxid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReftxid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.Utxo} returns this
 */
proto.xuperchain.Utxo.prototype.setReftxid = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional int32 refOffset = 5;
 * @return {number}
 */
proto.xuperchain.Utxo.prototype.getRefoffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.Utxo} returns this
 */
proto.xuperchain.Utxo.prototype.setRefoffset = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.UtxoInput.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.UtxoInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.UtxoInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.UtxoInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    publickey: jspb.Message.getFieldWithDefault(msg, 4, ""),
    totalneed: jspb.Message.getFieldWithDefault(msg, 5, ""),
    usersign: msg.getUsersign_asB64(),
    needlock: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.UtxoInput}
 */
proto.xuperchain.UtxoInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.UtxoInput;
  return proto.xuperchain.UtxoInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.UtxoInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.UtxoInput}
 */
proto.xuperchain.UtxoInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublickey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalneed(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setUsersign(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeedlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.UtxoInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.UtxoInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.UtxoInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.UtxoInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPublickey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTotalneed();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUsersign_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getNeedlock();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.UtxoInput.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.UtxoInput} returns this
*/
proto.xuperchain.UtxoInput.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.UtxoInput} returns this
 */
proto.xuperchain.UtxoInput.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.UtxoInput.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.UtxoInput.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoInput} returns this
 */
proto.xuperchain.UtxoInput.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.xuperchain.UtxoInput.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoInput} returns this
 */
proto.xuperchain.UtxoInput.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string publickey = 4;
 * @return {string}
 */
proto.xuperchain.UtxoInput.prototype.getPublickey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoInput} returns this
 */
proto.xuperchain.UtxoInput.prototype.setPublickey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string totalNeed = 5;
 * @return {string}
 */
proto.xuperchain.UtxoInput.prototype.getTotalneed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoInput} returns this
 */
proto.xuperchain.UtxoInput.prototype.setTotalneed = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes userSign = 7;
 * @return {string}
 */
proto.xuperchain.UtxoInput.prototype.getUsersign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes userSign = 7;
 * This is a type-conversion wrapper around `getUsersign()`
 * @return {string}
 */
proto.xuperchain.UtxoInput.prototype.getUsersign_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getUsersign()));
};


/**
 * optional bytes userSign = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getUsersign()`
 * @return {!Uint8Array}
 */
proto.xuperchain.UtxoInput.prototype.getUsersign_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getUsersign()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.UtxoInput} returns this
 */
proto.xuperchain.UtxoInput.prototype.setUsersign = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional bool needLock = 8;
 * @return {boolean}
 */
proto.xuperchain.UtxoInput.prototype.getNeedlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.UtxoInput} returns this
 */
proto.xuperchain.UtxoInput.prototype.setNeedlock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.UtxoOutput.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.UtxoOutput.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.UtxoOutput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.UtxoOutput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.UtxoOutput.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    utxolistList: jspb.Message.toObjectList(msg.getUtxolistList(),
    proto.xuperchain.Utxo.toObject, includeInstance),
    totalselected: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.UtxoOutput}
 */
proto.xuperchain.UtxoOutput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.UtxoOutput;
  return proto.xuperchain.UtxoOutput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.UtxoOutput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.UtxoOutput}
 */
proto.xuperchain.UtxoOutput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.xuperchain.Utxo;
      reader.readMessage(value,proto.xuperchain.Utxo.deserializeBinaryFromReader);
      msg.addUtxolist(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalselected(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.UtxoOutput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.UtxoOutput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.UtxoOutput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.UtxoOutput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getUtxolistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.xuperchain.Utxo.serializeBinaryToWriter
    );
  }
  f = message.getTotalselected();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.UtxoOutput.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.UtxoOutput} returns this
*/
proto.xuperchain.UtxoOutput.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.UtxoOutput} returns this
 */
proto.xuperchain.UtxoOutput.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.UtxoOutput.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Utxo utxoList = 2;
 * @return {!Array<!proto.xuperchain.Utxo>}
 */
proto.xuperchain.UtxoOutput.prototype.getUtxolistList = function() {
  return /** @type{!Array<!proto.xuperchain.Utxo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.Utxo, 2));
};


/**
 * @param {!Array<!proto.xuperchain.Utxo>} value
 * @return {!proto.xuperchain.UtxoOutput} returns this
*/
proto.xuperchain.UtxoOutput.prototype.setUtxolistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.xuperchain.Utxo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.Utxo}
 */
proto.xuperchain.UtxoOutput.prototype.addUtxolist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.xuperchain.Utxo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.UtxoOutput} returns this
 */
proto.xuperchain.UtxoOutput.prototype.clearUtxolistList = function() {
  return this.setUtxolistList([]);
};


/**
 * optional string totalSelected = 3;
 * @return {string}
 */
proto.xuperchain.UtxoOutput.prototype.getTotalselected = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoOutput} returns this
 */
proto.xuperchain.UtxoOutput.prototype.setTotalselected = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.NativeCodeDesc.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.NativeCodeDesc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.NativeCodeDesc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.NativeCodeDesc.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    digest: msg.getDigest_asB64(),
    prevversion: jspb.Message.getFieldWithDefault(msg, 4, ""),
    xuperapiversion: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.NativeCodeDesc}
 */
proto.xuperchain.NativeCodeDesc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.NativeCodeDesc;
  return proto.xuperchain.NativeCodeDesc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.NativeCodeDesc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.NativeCodeDesc}
 */
proto.xuperchain.NativeCodeDesc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDigest(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrevversion(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setXuperapiversion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.NativeCodeDesc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.NativeCodeDesc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.NativeCodeDesc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.NativeCodeDesc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDigest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getPrevversion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getXuperapiversion();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.xuperchain.NativeCodeDesc.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.NativeCodeDesc} returns this
 */
proto.xuperchain.NativeCodeDesc.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.xuperchain.NativeCodeDesc.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.NativeCodeDesc} returns this
 */
proto.xuperchain.NativeCodeDesc.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes digest = 3;
 * @return {string}
 */
proto.xuperchain.NativeCodeDesc.prototype.getDigest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes digest = 3;
 * This is a type-conversion wrapper around `getDigest()`
 * @return {string}
 */
proto.xuperchain.NativeCodeDesc.prototype.getDigest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDigest()));
};


/**
 * optional bytes digest = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDigest()`
 * @return {!Uint8Array}
 */
proto.xuperchain.NativeCodeDesc.prototype.getDigest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDigest()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.NativeCodeDesc} returns this
 */
proto.xuperchain.NativeCodeDesc.prototype.setDigest = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string prevVersion = 4;
 * @return {string}
 */
proto.xuperchain.NativeCodeDesc.prototype.getPrevversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.NativeCodeDesc} returns this
 */
proto.xuperchain.NativeCodeDesc.prototype.setPrevversion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 xuperApiVersion = 5;
 * @return {number}
 */
proto.xuperchain.NativeCodeDesc.prototype.getXuperapiversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.NativeCodeDesc} returns this
 */
proto.xuperchain.NativeCodeDesc.prototype.setXuperapiversion = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.WasmCodeDesc.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.WasmCodeDesc.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.WasmCodeDesc} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.WasmCodeDesc.toObject = function(includeInstance, msg) {
  var f, obj = {
    runtime: jspb.Message.getFieldWithDefault(msg, 1, ""),
    compiler: jspb.Message.getFieldWithDefault(msg, 2, ""),
    digest: msg.getDigest_asB64(),
    vmCompiler: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.WasmCodeDesc}
 */
proto.xuperchain.WasmCodeDesc.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.WasmCodeDesc;
  return proto.xuperchain.WasmCodeDesc.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.WasmCodeDesc} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.WasmCodeDesc}
 */
proto.xuperchain.WasmCodeDesc.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompiler(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDigest(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setVmCompiler(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.WasmCodeDesc.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.WasmCodeDesc.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.WasmCodeDesc} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.WasmCodeDesc.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRuntime();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompiler();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDigest_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getVmCompiler();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string runtime = 1;
 * @return {string}
 */
proto.xuperchain.WasmCodeDesc.prototype.getRuntime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.WasmCodeDesc} returns this
 */
proto.xuperchain.WasmCodeDesc.prototype.setRuntime = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string compiler = 2;
 * @return {string}
 */
proto.xuperchain.WasmCodeDesc.prototype.getCompiler = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.WasmCodeDesc} returns this
 */
proto.xuperchain.WasmCodeDesc.prototype.setCompiler = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes digest = 3;
 * @return {string}
 */
proto.xuperchain.WasmCodeDesc.prototype.getDigest = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes digest = 3;
 * This is a type-conversion wrapper around `getDigest()`
 * @return {string}
 */
proto.xuperchain.WasmCodeDesc.prototype.getDigest_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDigest()));
};


/**
 * optional bytes digest = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDigest()`
 * @return {!Uint8Array}
 */
proto.xuperchain.WasmCodeDesc.prototype.getDigest_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDigest()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.WasmCodeDesc} returns this
 */
proto.xuperchain.WasmCodeDesc.prototype.setDigest = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string vm_compiler = 4;
 * @return {string}
 */
proto.xuperchain.WasmCodeDesc.prototype.getVmCompiler = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.WasmCodeDesc} returns this
 */
proto.xuperchain.WasmCodeDesc.prototype.setVmCompiler = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DeployNativeCodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DeployNativeCodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DeployNativeCodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    desc: (f = msg.getDesc()) && proto.xuperchain.NativeCodeDesc.toObject(includeInstance, f),
    code: msg.getCode_asB64(),
    address: jspb.Message.getFieldWithDefault(msg, 5, ""),
    pubkey: msg.getPubkey_asB64(),
    sign: msg.getSign_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DeployNativeCodeRequest}
 */
proto.xuperchain.DeployNativeCodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DeployNativeCodeRequest;
  return proto.xuperchain.DeployNativeCodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DeployNativeCodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DeployNativeCodeRequest}
 */
proto.xuperchain.DeployNativeCodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = new proto.xuperchain.NativeCodeDesc;
      reader.readMessage(value,proto.xuperchain.NativeCodeDesc.deserializeBinaryFromReader);
      msg.setDesc(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubkey(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DeployNativeCodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DeployNativeCodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DeployNativeCodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDesc();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.xuperchain.NativeCodeDesc.serializeBinaryToWriter
    );
  }
  f = message.getCode_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getSign_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DeployNativeCodeRequest} returns this
*/
proto.xuperchain.DeployNativeCodeRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DeployNativeCodeRequest} returns this
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DeployNativeCodeRequest} returns this
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional NativeCodeDesc desc = 3;
 * @return {?proto.xuperchain.NativeCodeDesc}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getDesc = function() {
  return /** @type{?proto.xuperchain.NativeCodeDesc} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.NativeCodeDesc, 3));
};


/**
 * @param {?proto.xuperchain.NativeCodeDesc|undefined} value
 * @return {!proto.xuperchain.DeployNativeCodeRequest} returns this
*/
proto.xuperchain.DeployNativeCodeRequest.prototype.setDesc = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DeployNativeCodeRequest} returns this
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.clearDesc = function() {
  return this.setDesc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.hasDesc = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes code = 4;
 * @return {string}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes code = 4;
 * This is a type-conversion wrapper around `getCode()`
 * @return {string}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getCode_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCode()));
};


/**
 * optional bytes code = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCode()`
 * @return {!Uint8Array}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getCode_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCode()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.DeployNativeCodeRequest} returns this
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional string address = 5;
 * @return {string}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DeployNativeCodeRequest} returns this
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bytes pubkey = 6;
 * @return {string}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getPubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes pubkey = 6;
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {string}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getPubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubkey()));
};


/**
 * optional bytes pubkey = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {!Uint8Array}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getPubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.DeployNativeCodeRequest} returns this
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.setPubkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional bytes sign = 7;
 * @return {string}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getSign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes sign = 7;
 * This is a type-conversion wrapper around `getSign()`
 * @return {string}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getSign_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSign()));
};


/**
 * optional bytes sign = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSign()`
 * @return {!Uint8Array}
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.getSign_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSign()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.DeployNativeCodeRequest} returns this
 */
proto.xuperchain.DeployNativeCodeRequest.prototype.setSign = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DeployNativeCodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DeployNativeCodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DeployNativeCodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DeployNativeCodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DeployNativeCodeResponse}
 */
proto.xuperchain.DeployNativeCodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DeployNativeCodeResponse;
  return proto.xuperchain.DeployNativeCodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DeployNativeCodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DeployNativeCodeResponse}
 */
proto.xuperchain.DeployNativeCodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DeployNativeCodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DeployNativeCodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DeployNativeCodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DeployNativeCodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DeployNativeCodeResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DeployNativeCodeResponse} returns this
*/
proto.xuperchain.DeployNativeCodeResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DeployNativeCodeResponse} returns this
 */
proto.xuperchain.DeployNativeCodeResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DeployNativeCodeResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.NativeCodeStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.NativeCodeStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.NativeCodeStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.NativeCodeStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    desc: (f = msg.getDesc()) && proto.xuperchain.NativeCodeDesc.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    healthy: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.NativeCodeStatus}
 */
proto.xuperchain.NativeCodeStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.NativeCodeStatus;
  return proto.xuperchain.NativeCodeStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.NativeCodeStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.NativeCodeStatus}
 */
proto.xuperchain.NativeCodeStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.NativeCodeDesc;
      reader.readMessage(value,proto.xuperchain.NativeCodeDesc.deserializeBinaryFromReader);
      msg.setDesc(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHealthy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.NativeCodeStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.NativeCodeStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.NativeCodeStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.NativeCodeStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDesc();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.NativeCodeDesc.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getHealthy();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional NativeCodeDesc desc = 1;
 * @return {?proto.xuperchain.NativeCodeDesc}
 */
proto.xuperchain.NativeCodeStatus.prototype.getDesc = function() {
  return /** @type{?proto.xuperchain.NativeCodeDesc} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.NativeCodeDesc, 1));
};


/**
 * @param {?proto.xuperchain.NativeCodeDesc|undefined} value
 * @return {!proto.xuperchain.NativeCodeStatus} returns this
*/
proto.xuperchain.NativeCodeStatus.prototype.setDesc = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.NativeCodeStatus} returns this
 */
proto.xuperchain.NativeCodeStatus.prototype.clearDesc = function() {
  return this.setDesc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.NativeCodeStatus.prototype.hasDesc = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 status = 2;
 * @return {number}
 */
proto.xuperchain.NativeCodeStatus.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.NativeCodeStatus} returns this
 */
proto.xuperchain.NativeCodeStatus.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool healthy = 3;
 * @return {boolean}
 */
proto.xuperchain.NativeCodeStatus.prototype.getHealthy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.NativeCodeStatus} returns this
 */
proto.xuperchain.NativeCodeStatus.prototype.setHealthy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.NativeCodeStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.NativeCodeStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.NativeCodeStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.NativeCodeStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.NativeCodeStatusRequest}
 */
proto.xuperchain.NativeCodeStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.NativeCodeStatusRequest;
  return proto.xuperchain.NativeCodeStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.NativeCodeStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.NativeCodeStatusRequest}
 */
proto.xuperchain.NativeCodeStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.NativeCodeStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.NativeCodeStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.NativeCodeStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.NativeCodeStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.NativeCodeStatusRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.NativeCodeStatusRequest} returns this
*/
proto.xuperchain.NativeCodeStatusRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.NativeCodeStatusRequest} returns this
 */
proto.xuperchain.NativeCodeStatusRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.NativeCodeStatusRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.NativeCodeStatusRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.NativeCodeStatusRequest} returns this
 */
proto.xuperchain.NativeCodeStatusRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.NativeCodeStatusResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.NativeCodeStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.NativeCodeStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.NativeCodeStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.NativeCodeStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    statusList: jspb.Message.toObjectList(msg.getStatusList(),
    proto.xuperchain.NativeCodeStatus.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.NativeCodeStatusResponse}
 */
proto.xuperchain.NativeCodeStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.NativeCodeStatusResponse;
  return proto.xuperchain.NativeCodeStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.NativeCodeStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.NativeCodeStatusResponse}
 */
proto.xuperchain.NativeCodeStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.xuperchain.NativeCodeStatus;
      reader.readMessage(value,proto.xuperchain.NativeCodeStatus.deserializeBinaryFromReader);
      msg.addStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.NativeCodeStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.NativeCodeStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.NativeCodeStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.NativeCodeStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.xuperchain.NativeCodeStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.NativeCodeStatusResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.NativeCodeStatusResponse} returns this
*/
proto.xuperchain.NativeCodeStatusResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.NativeCodeStatusResponse} returns this
 */
proto.xuperchain.NativeCodeStatusResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.NativeCodeStatusResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated NativeCodeStatus status = 2;
 * @return {!Array<!proto.xuperchain.NativeCodeStatus>}
 */
proto.xuperchain.NativeCodeStatusResponse.prototype.getStatusList = function() {
  return /** @type{!Array<!proto.xuperchain.NativeCodeStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.NativeCodeStatus, 2));
};


/**
 * @param {!Array<!proto.xuperchain.NativeCodeStatus>} value
 * @return {!proto.xuperchain.NativeCodeStatusResponse} returns this
*/
proto.xuperchain.NativeCodeStatusResponse.prototype.setStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.xuperchain.NativeCodeStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.NativeCodeStatus}
 */
proto.xuperchain.NativeCodeStatusResponse.prototype.addStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.xuperchain.NativeCodeStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.NativeCodeStatusResponse} returns this
 */
proto.xuperchain.NativeCodeStatusResponse.prototype.clearStatusList = function() {
  return this.setStatusList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposCandidatesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposCandidatesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposCandidatesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposCandidatesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposCandidatesRequest}
 */
proto.xuperchain.DposCandidatesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposCandidatesRequest;
  return proto.xuperchain.DposCandidatesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposCandidatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposCandidatesRequest}
 */
proto.xuperchain.DposCandidatesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposCandidatesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposCandidatesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposCandidatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposCandidatesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposCandidatesRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposCandidatesRequest} returns this
*/
proto.xuperchain.DposCandidatesRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposCandidatesRequest} returns this
 */
proto.xuperchain.DposCandidatesRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposCandidatesRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.DposCandidatesRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposCandidatesRequest} returns this
 */
proto.xuperchain.DposCandidatesRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.DposCandidatesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposCandidatesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposCandidatesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposCandidatesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposCandidatesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    candidatesinfoList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposCandidatesResponse}
 */
proto.xuperchain.DposCandidatesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposCandidatesResponse;
  return proto.xuperchain.DposCandidatesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposCandidatesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposCandidatesResponse}
 */
proto.xuperchain.DposCandidatesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCandidatesinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposCandidatesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposCandidatesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposCandidatesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposCandidatesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getCandidatesinfoList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposCandidatesResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposCandidatesResponse} returns this
*/
proto.xuperchain.DposCandidatesResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposCandidatesResponse} returns this
 */
proto.xuperchain.DposCandidatesResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposCandidatesResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string candidatesInfo = 2;
 * @return {!Array<string>}
 */
proto.xuperchain.DposCandidatesResponse.prototype.getCandidatesinfoList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xuperchain.DposCandidatesResponse} returns this
 */
proto.xuperchain.DposCandidatesResponse.prototype.setCandidatesinfoList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.DposCandidatesResponse} returns this
 */
proto.xuperchain.DposCandidatesResponse.prototype.addCandidatesinfo = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.DposCandidatesResponse} returns this
 */
proto.xuperchain.DposCandidatesResponse.prototype.clearCandidatesinfoList = function() {
  return this.setCandidatesinfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposNominateRecordsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposNominateRecordsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposNominateRecordsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposNominateRecordsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposNominateRecordsRequest}
 */
proto.xuperchain.DposNominateRecordsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposNominateRecordsRequest;
  return proto.xuperchain.DposNominateRecordsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposNominateRecordsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposNominateRecordsRequest}
 */
proto.xuperchain.DposNominateRecordsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposNominateRecordsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposNominateRecordsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposNominateRecordsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposNominateRecordsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposNominateRecordsRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposNominateRecordsRequest} returns this
*/
proto.xuperchain.DposNominateRecordsRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposNominateRecordsRequest} returns this
 */
proto.xuperchain.DposNominateRecordsRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposNominateRecordsRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.DposNominateRecordsRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposNominateRecordsRequest} returns this
 */
proto.xuperchain.DposNominateRecordsRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.xuperchain.DposNominateRecordsRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposNominateRecordsRequest} returns this
 */
proto.xuperchain.DposNominateRecordsRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposNominateInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposNominateInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposNominateInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposNominateInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    candidate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposNominateInfo}
 */
proto.xuperchain.DposNominateInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposNominateInfo;
  return proto.xuperchain.DposNominateInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposNominateInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposNominateInfo}
 */
proto.xuperchain.DposNominateInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCandidate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposNominateInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposNominateInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposNominateInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposNominateInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCandidate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string candidate = 1;
 * @return {string}
 */
proto.xuperchain.DposNominateInfo.prototype.getCandidate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposNominateInfo} returns this
 */
proto.xuperchain.DposNominateInfo.prototype.setCandidate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string txid = 2;
 * @return {string}
 */
proto.xuperchain.DposNominateInfo.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposNominateInfo} returns this
 */
proto.xuperchain.DposNominateInfo.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.DposNominateRecordsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposNominateRecordsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposNominateRecordsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposNominateRecordsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposNominateRecordsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    nominaterecordsList: jspb.Message.toObjectList(msg.getNominaterecordsList(),
    proto.xuperchain.DposNominateInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposNominateRecordsResponse}
 */
proto.xuperchain.DposNominateRecordsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposNominateRecordsResponse;
  return proto.xuperchain.DposNominateRecordsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposNominateRecordsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposNominateRecordsResponse}
 */
proto.xuperchain.DposNominateRecordsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.xuperchain.DposNominateInfo;
      reader.readMessage(value,proto.xuperchain.DposNominateInfo.deserializeBinaryFromReader);
      msg.addNominaterecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposNominateRecordsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposNominateRecordsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposNominateRecordsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposNominateRecordsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getNominaterecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.xuperchain.DposNominateInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposNominateRecordsResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposNominateRecordsResponse} returns this
*/
proto.xuperchain.DposNominateRecordsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposNominateRecordsResponse} returns this
 */
proto.xuperchain.DposNominateRecordsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposNominateRecordsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated DposNominateInfo nominateRecords = 2;
 * @return {!Array<!proto.xuperchain.DposNominateInfo>}
 */
proto.xuperchain.DposNominateRecordsResponse.prototype.getNominaterecordsList = function() {
  return /** @type{!Array<!proto.xuperchain.DposNominateInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.DposNominateInfo, 2));
};


/**
 * @param {!Array<!proto.xuperchain.DposNominateInfo>} value
 * @return {!proto.xuperchain.DposNominateRecordsResponse} returns this
*/
proto.xuperchain.DposNominateRecordsResponse.prototype.setNominaterecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.xuperchain.DposNominateInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.DposNominateInfo}
 */
proto.xuperchain.DposNominateRecordsResponse.prototype.addNominaterecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.xuperchain.DposNominateInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.DposNominateRecordsResponse} returns this
 */
proto.xuperchain.DposNominateRecordsResponse.prototype.clearNominaterecordsList = function() {
  return this.setNominaterecordsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposNomineeRecordsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposNomineeRecordsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposNomineeRecordsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposNomineeRecordsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposNomineeRecordsRequest}
 */
proto.xuperchain.DposNomineeRecordsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposNomineeRecordsRequest;
  return proto.xuperchain.DposNomineeRecordsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposNomineeRecordsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposNomineeRecordsRequest}
 */
proto.xuperchain.DposNomineeRecordsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposNomineeRecordsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposNomineeRecordsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposNomineeRecordsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposNomineeRecordsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposNomineeRecordsRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposNomineeRecordsRequest} returns this
*/
proto.xuperchain.DposNomineeRecordsRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposNomineeRecordsRequest} returns this
 */
proto.xuperchain.DposNomineeRecordsRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposNomineeRecordsRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.DposNomineeRecordsRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposNomineeRecordsRequest} returns this
 */
proto.xuperchain.DposNomineeRecordsRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.xuperchain.DposNomineeRecordsRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposNomineeRecordsRequest} returns this
 */
proto.xuperchain.DposNomineeRecordsRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposNomineeRecordsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposNomineeRecordsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposNomineeRecordsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposNomineeRecordsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    txid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposNomineeRecordsResponse}
 */
proto.xuperchain.DposNomineeRecordsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposNomineeRecordsResponse;
  return proto.xuperchain.DposNomineeRecordsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposNomineeRecordsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposNomineeRecordsResponse}
 */
proto.xuperchain.DposNomineeRecordsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposNomineeRecordsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposNomineeRecordsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposNomineeRecordsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposNomineeRecordsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposNomineeRecordsResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposNomineeRecordsResponse} returns this
*/
proto.xuperchain.DposNomineeRecordsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposNomineeRecordsResponse} returns this
 */
proto.xuperchain.DposNomineeRecordsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposNomineeRecordsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string txid = 2;
 * @return {string}
 */
proto.xuperchain.DposNomineeRecordsResponse.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposNomineeRecordsResponse} returns this
 */
proto.xuperchain.DposNomineeRecordsResponse.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposVoteRecordsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposVoteRecordsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposVoteRecordsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposVoteRecordsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposVoteRecordsRequest}
 */
proto.xuperchain.DposVoteRecordsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposVoteRecordsRequest;
  return proto.xuperchain.DposVoteRecordsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposVoteRecordsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposVoteRecordsRequest}
 */
proto.xuperchain.DposVoteRecordsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposVoteRecordsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposVoteRecordsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposVoteRecordsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposVoteRecordsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposVoteRecordsRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposVoteRecordsRequest} returns this
*/
proto.xuperchain.DposVoteRecordsRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposVoteRecordsRequest} returns this
 */
proto.xuperchain.DposVoteRecordsRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposVoteRecordsRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.DposVoteRecordsRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposVoteRecordsRequest} returns this
 */
proto.xuperchain.DposVoteRecordsRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.xuperchain.DposVoteRecordsRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposVoteRecordsRequest} returns this
 */
proto.xuperchain.DposVoteRecordsRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.voteRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.voteRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.voteRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.voteRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    candidate: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.voteRecord}
 */
proto.xuperchain.voteRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.voteRecord;
  return proto.xuperchain.voteRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.voteRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.voteRecord}
 */
proto.xuperchain.voteRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCandidate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.voteRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.voteRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.voteRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.voteRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCandidate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string candidate = 1;
 * @return {string}
 */
proto.xuperchain.voteRecord.prototype.getCandidate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.voteRecord} returns this
 */
proto.xuperchain.voteRecord.prototype.setCandidate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string txid = 2;
 * @return {string}
 */
proto.xuperchain.voteRecord.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.voteRecord} returns this
 */
proto.xuperchain.voteRecord.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.DposVoteRecordsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposVoteRecordsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposVoteRecordsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposVoteRecordsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposVoteRecordsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    votetxidrecordsList: jspb.Message.toObjectList(msg.getVotetxidrecordsList(),
    proto.xuperchain.voteRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposVoteRecordsResponse}
 */
proto.xuperchain.DposVoteRecordsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposVoteRecordsResponse;
  return proto.xuperchain.DposVoteRecordsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposVoteRecordsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposVoteRecordsResponse}
 */
proto.xuperchain.DposVoteRecordsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.xuperchain.voteRecord;
      reader.readMessage(value,proto.xuperchain.voteRecord.deserializeBinaryFromReader);
      msg.addVotetxidrecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposVoteRecordsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposVoteRecordsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposVoteRecordsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposVoteRecordsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getVotetxidrecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.xuperchain.voteRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposVoteRecordsResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposVoteRecordsResponse} returns this
*/
proto.xuperchain.DposVoteRecordsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposVoteRecordsResponse} returns this
 */
proto.xuperchain.DposVoteRecordsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposVoteRecordsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated voteRecord voteTxidRecords = 2;
 * @return {!Array<!proto.xuperchain.voteRecord>}
 */
proto.xuperchain.DposVoteRecordsResponse.prototype.getVotetxidrecordsList = function() {
  return /** @type{!Array<!proto.xuperchain.voteRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.voteRecord, 2));
};


/**
 * @param {!Array<!proto.xuperchain.voteRecord>} value
 * @return {!proto.xuperchain.DposVoteRecordsResponse} returns this
*/
proto.xuperchain.DposVoteRecordsResponse.prototype.setVotetxidrecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.xuperchain.voteRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.voteRecord}
 */
proto.xuperchain.DposVoteRecordsResponse.prototype.addVotetxidrecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.xuperchain.voteRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.DposVoteRecordsResponse} returns this
 */
proto.xuperchain.DposVoteRecordsResponse.prototype.clearVotetxidrecordsList = function() {
  return this.setVotetxidrecordsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposVotedRecordsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposVotedRecordsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposVotedRecordsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposVotedRecordsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposVotedRecordsRequest}
 */
proto.xuperchain.DposVotedRecordsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposVotedRecordsRequest;
  return proto.xuperchain.DposVotedRecordsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposVotedRecordsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposVotedRecordsRequest}
 */
proto.xuperchain.DposVotedRecordsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposVotedRecordsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposVotedRecordsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposVotedRecordsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposVotedRecordsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposVotedRecordsRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposVotedRecordsRequest} returns this
*/
proto.xuperchain.DposVotedRecordsRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposVotedRecordsRequest} returns this
 */
proto.xuperchain.DposVotedRecordsRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposVotedRecordsRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.DposVotedRecordsRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposVotedRecordsRequest} returns this
 */
proto.xuperchain.DposVotedRecordsRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.xuperchain.DposVotedRecordsRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposVotedRecordsRequest} returns this
 */
proto.xuperchain.DposVotedRecordsRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.votedRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.votedRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.votedRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.votedRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    voter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.votedRecord}
 */
proto.xuperchain.votedRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.votedRecord;
  return proto.xuperchain.votedRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.votedRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.votedRecord}
 */
proto.xuperchain.votedRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.votedRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.votedRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.votedRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.votedRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string voter = 1;
 * @return {string}
 */
proto.xuperchain.votedRecord.prototype.getVoter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.votedRecord} returns this
 */
proto.xuperchain.votedRecord.prototype.setVoter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string txid = 2;
 * @return {string}
 */
proto.xuperchain.votedRecord.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.votedRecord} returns this
 */
proto.xuperchain.votedRecord.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.DposVotedRecordsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposVotedRecordsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposVotedRecordsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposVotedRecordsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposVotedRecordsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    votedtxidrecordsList: jspb.Message.toObjectList(msg.getVotedtxidrecordsList(),
    proto.xuperchain.votedRecord.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposVotedRecordsResponse}
 */
proto.xuperchain.DposVotedRecordsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposVotedRecordsResponse;
  return proto.xuperchain.DposVotedRecordsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposVotedRecordsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposVotedRecordsResponse}
 */
proto.xuperchain.DposVotedRecordsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.xuperchain.votedRecord;
      reader.readMessage(value,proto.xuperchain.votedRecord.deserializeBinaryFromReader);
      msg.addVotedtxidrecords(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposVotedRecordsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposVotedRecordsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposVotedRecordsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposVotedRecordsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getVotedtxidrecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.xuperchain.votedRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposVotedRecordsResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposVotedRecordsResponse} returns this
*/
proto.xuperchain.DposVotedRecordsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposVotedRecordsResponse} returns this
 */
proto.xuperchain.DposVotedRecordsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposVotedRecordsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated votedRecord votedTxidRecords = 2;
 * @return {!Array<!proto.xuperchain.votedRecord>}
 */
proto.xuperchain.DposVotedRecordsResponse.prototype.getVotedtxidrecordsList = function() {
  return /** @type{!Array<!proto.xuperchain.votedRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.votedRecord, 2));
};


/**
 * @param {!Array<!proto.xuperchain.votedRecord>} value
 * @return {!proto.xuperchain.DposVotedRecordsResponse} returns this
*/
proto.xuperchain.DposVotedRecordsResponse.prototype.setVotedtxidrecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.xuperchain.votedRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.votedRecord}
 */
proto.xuperchain.DposVotedRecordsResponse.prototype.addVotedtxidrecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.xuperchain.votedRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.DposVotedRecordsResponse} returns this
 */
proto.xuperchain.DposVotedRecordsResponse.prototype.clearVotedtxidrecordsList = function() {
  return this.setVotedtxidrecordsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposCheckResultsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposCheckResultsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposCheckResultsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposCheckResultsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    term: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposCheckResultsRequest}
 */
proto.xuperchain.DposCheckResultsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposCheckResultsRequest;
  return proto.xuperchain.DposCheckResultsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposCheckResultsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposCheckResultsRequest}
 */
proto.xuperchain.DposCheckResultsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTerm(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposCheckResultsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposCheckResultsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposCheckResultsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposCheckResultsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTerm();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposCheckResultsRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposCheckResultsRequest} returns this
*/
proto.xuperchain.DposCheckResultsRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposCheckResultsRequest} returns this
 */
proto.xuperchain.DposCheckResultsRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposCheckResultsRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.DposCheckResultsRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposCheckResultsRequest} returns this
 */
proto.xuperchain.DposCheckResultsRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 term = 3;
 * @return {number}
 */
proto.xuperchain.DposCheckResultsRequest.prototype.getTerm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.DposCheckResultsRequest} returns this
 */
proto.xuperchain.DposCheckResultsRequest.prototype.setTerm = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.DposCheckResultsResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposCheckResultsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposCheckResultsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposCheckResultsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposCheckResultsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    term: jspb.Message.getFieldWithDefault(msg, 2, 0),
    checkresultList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposCheckResultsResponse}
 */
proto.xuperchain.DposCheckResultsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposCheckResultsResponse;
  return proto.xuperchain.DposCheckResultsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposCheckResultsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposCheckResultsResponse}
 */
proto.xuperchain.DposCheckResultsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTerm(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addCheckresult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposCheckResultsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposCheckResultsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposCheckResultsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposCheckResultsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getTerm();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCheckresultList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposCheckResultsResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposCheckResultsResponse} returns this
*/
proto.xuperchain.DposCheckResultsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposCheckResultsResponse} returns this
 */
proto.xuperchain.DposCheckResultsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposCheckResultsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 term = 2;
 * @return {number}
 */
proto.xuperchain.DposCheckResultsResponse.prototype.getTerm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.DposCheckResultsResponse} returns this
 */
proto.xuperchain.DposCheckResultsResponse.prototype.setTerm = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated string checkResult = 3;
 * @return {!Array<string>}
 */
proto.xuperchain.DposCheckResultsResponse.prototype.getCheckresultList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xuperchain.DposCheckResultsResponse} returns this
 */
proto.xuperchain.DposCheckResultsResponse.prototype.setCheckresultList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.DposCheckResultsResponse} returns this
 */
proto.xuperchain.DposCheckResultsResponse.prototype.addCheckresult = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.DposCheckResultsResponse} returns this
 */
proto.xuperchain.DposCheckResultsResponse.prototype.clearCheckresultList = function() {
  return this.setCheckresultList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposStatusRequest}
 */
proto.xuperchain.DposStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposStatusRequest;
  return proto.xuperchain.DposStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposStatusRequest}
 */
proto.xuperchain.DposStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposStatusRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposStatusRequest} returns this
*/
proto.xuperchain.DposStatusRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposStatusRequest} returns this
 */
proto.xuperchain.DposStatusRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposStatusRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.DposStatusRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposStatusRequest} returns this
 */
proto.xuperchain.DposStatusRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.xuperchain.DposStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposStatusResponse}
 */
proto.xuperchain.DposStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposStatusResponse;
  return proto.xuperchain.DposStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposStatusResponse}
 */
proto.xuperchain.DposStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.xuperchain.DposStatus;
      reader.readMessage(value,proto.xuperchain.DposStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.xuperchain.DposStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.DposStatusResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.DposStatusResponse} returns this
*/
proto.xuperchain.DposStatusResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposStatusResponse} returns this
 */
proto.xuperchain.DposStatusResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposStatusResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DposStatus status = 2;
 * @return {?proto.xuperchain.DposStatus}
 */
proto.xuperchain.DposStatusResponse.prototype.getStatus = function() {
  return /** @type{?proto.xuperchain.DposStatus} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.DposStatus, 2));
};


/**
 * @param {?proto.xuperchain.DposStatus|undefined} value
 * @return {!proto.xuperchain.DposStatusResponse} returns this
*/
proto.xuperchain.DposStatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.DposStatusResponse} returns this
 */
proto.xuperchain.DposStatusResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.DposStatusResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.DposStatus.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.DposStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.DposStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.DposStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    term: jspb.Message.getFieldWithDefault(msg, 1, 0),
    blockNum: jspb.Message.getFieldWithDefault(msg, 2, 0),
    proposer: jspb.Message.getFieldWithDefault(msg, 3, ""),
    proposerNum: jspb.Message.getFieldWithDefault(msg, 4, 0),
    checkresultList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.DposStatus}
 */
proto.xuperchain.DposStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.DposStatus;
  return proto.xuperchain.DposStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.DposStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.DposStatus}
 */
proto.xuperchain.DposStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTerm(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBlockNum(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProposer(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProposerNum(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addCheckresult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.DposStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.DposStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.DposStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.DposStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTerm();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getBlockNum();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getProposer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProposerNum();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCheckresultList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional int64 term = 1;
 * @return {number}
 */
proto.xuperchain.DposStatus.prototype.getTerm = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.DposStatus} returns this
 */
proto.xuperchain.DposStatus.prototype.setTerm = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 block_num = 2;
 * @return {number}
 */
proto.xuperchain.DposStatus.prototype.getBlockNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.DposStatus} returns this
 */
proto.xuperchain.DposStatus.prototype.setBlockNum = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string proposer = 3;
 * @return {string}
 */
proto.xuperchain.DposStatus.prototype.getProposer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.DposStatus} returns this
 */
proto.xuperchain.DposStatus.prototype.setProposer = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 proposer_num = 4;
 * @return {number}
 */
proto.xuperchain.DposStatus.prototype.getProposerNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.DposStatus} returns this
 */
proto.xuperchain.DposStatus.prototype.setProposerNum = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string checkResult = 5;
 * @return {!Array<string>}
 */
proto.xuperchain.DposStatus.prototype.getCheckresultList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xuperchain.DposStatus} returns this
 */
proto.xuperchain.DposStatus.prototype.setCheckresultList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.DposStatus} returns this
 */
proto.xuperchain.DposStatus.prototype.addCheckresult = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.DposStatus} returns this
 */
proto.xuperchain.DposStatus.prototype.clearCheckresultList = function() {
  return this.setCheckresultList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.InvokeRPCRequest.repeatedFields_ = [3,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.InvokeRPCRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.InvokeRPCRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.InvokeRPCRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.InvokeRPCRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.xuperchain.InvokeRequest.toObject, includeInstance),
    initiator: jspb.Message.getFieldWithDefault(msg, 4, ""),
    authRequireList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.InvokeRPCRequest}
 */
proto.xuperchain.InvokeRPCRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.InvokeRPCRequest;
  return proto.xuperchain.InvokeRPCRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.InvokeRPCRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.InvokeRPCRequest}
 */
proto.xuperchain.InvokeRPCRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = new proto.xuperchain.InvokeRequest;
      reader.readMessage(value,proto.xuperchain.InvokeRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInitiator(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addAuthRequire(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.InvokeRPCRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.InvokeRPCRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.InvokeRPCRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.InvokeRPCRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.xuperchain.InvokeRequest.serializeBinaryToWriter
    );
  }
  f = message.getInitiator();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAuthRequireList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.InvokeRPCRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.InvokeRPCRequest} returns this
*/
proto.xuperchain.InvokeRPCRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.InvokeRPCRequest} returns this
 */
proto.xuperchain.InvokeRPCRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.InvokeRPCRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.InvokeRPCRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.InvokeRPCRequest} returns this
 */
proto.xuperchain.InvokeRPCRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated InvokeRequest requests = 3;
 * @return {!Array<!proto.xuperchain.InvokeRequest>}
 */
proto.xuperchain.InvokeRPCRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.xuperchain.InvokeRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.InvokeRequest, 3));
};


/**
 * @param {!Array<!proto.xuperchain.InvokeRequest>} value
 * @return {!proto.xuperchain.InvokeRPCRequest} returns this
*/
proto.xuperchain.InvokeRPCRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.xuperchain.InvokeRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.InvokeRequest}
 */
proto.xuperchain.InvokeRPCRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.xuperchain.InvokeRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.InvokeRPCRequest} returns this
 */
proto.xuperchain.InvokeRPCRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};


/**
 * optional string initiator = 4;
 * @return {string}
 */
proto.xuperchain.InvokeRPCRequest.prototype.getInitiator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.InvokeRPCRequest} returns this
 */
proto.xuperchain.InvokeRPCRequest.prototype.setInitiator = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string auth_require = 5;
 * @return {!Array<string>}
 */
proto.xuperchain.InvokeRPCRequest.prototype.getAuthRequireList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xuperchain.InvokeRPCRequest} returns this
 */
proto.xuperchain.InvokeRPCRequest.prototype.setAuthRequireList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.InvokeRPCRequest} returns this
 */
proto.xuperchain.InvokeRPCRequest.prototype.addAuthRequire = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.InvokeRPCRequest} returns this
 */
proto.xuperchain.InvokeRPCRequest.prototype.clearAuthRequireList = function() {
  return this.setAuthRequireList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.InvokeRPCResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.InvokeRPCResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.InvokeRPCResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.InvokeRPCResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    response: (f = msg.getResponse()) && proto.xuperchain.InvokeResponse.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.InvokeRPCResponse}
 */
proto.xuperchain.InvokeRPCResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.InvokeRPCResponse;
  return proto.xuperchain.InvokeRPCResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.InvokeRPCResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.InvokeRPCResponse}
 */
proto.xuperchain.InvokeRPCResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = new proto.xuperchain.InvokeResponse;
      reader.readMessage(value,proto.xuperchain.InvokeResponse.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.InvokeRPCResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.InvokeRPCResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.InvokeRPCResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.InvokeRPCResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.xuperchain.InvokeResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.InvokeRPCResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.InvokeRPCResponse} returns this
*/
proto.xuperchain.InvokeRPCResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.InvokeRPCResponse} returns this
 */
proto.xuperchain.InvokeRPCResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.InvokeRPCResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.InvokeRPCResponse.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.InvokeRPCResponse} returns this
 */
proto.xuperchain.InvokeRPCResponse.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional InvokeResponse response = 3;
 * @return {?proto.xuperchain.InvokeResponse}
 */
proto.xuperchain.InvokeRPCResponse.prototype.getResponse = function() {
  return /** @type{?proto.xuperchain.InvokeResponse} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.InvokeResponse, 3));
};


/**
 * @param {?proto.xuperchain.InvokeResponse|undefined} value
 * @return {!proto.xuperchain.InvokeRPCResponse} returns this
*/
proto.xuperchain.InvokeRPCResponse.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.InvokeRPCResponse} returns this
 */
proto.xuperchain.InvokeRPCResponse.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.InvokeRPCResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.InvokeRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.InvokeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.InvokeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.InvokeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.InvokeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    contractName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    methodName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    argsMap: (f = msg.getArgsMap()) ? f.toObject(includeInstance, undefined) : [],
    resourceLimitsList: jspb.Message.toObjectList(msg.getResourceLimitsList(),
    proto.xuperchain.ResourceLimit.toObject, includeInstance),
    amount: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.InvokeRequest}
 */
proto.xuperchain.InvokeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.InvokeRequest;
  return proto.xuperchain.InvokeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.InvokeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.InvokeRequest}
 */
proto.xuperchain.InvokeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
      break;
    case 4:
      var value = msg.getArgsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readBytes, null, "", "");
         });
      break;
    case 5:
      var value = new proto.xuperchain.ResourceLimit;
      reader.readMessage(value,proto.xuperchain.ResourceLimit.deserializeBinaryFromReader);
      msg.addResourceLimits(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.InvokeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.InvokeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.InvokeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.InvokeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContractName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getArgsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeBytes);
  }
  f = message.getResourceLimitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.xuperchain.ResourceLimit.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string module_name = 1;
 * @return {string}
 */
proto.xuperchain.InvokeRequest.prototype.getModuleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.InvokeRequest} returns this
 */
proto.xuperchain.InvokeRequest.prototype.setModuleName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string contract_name = 2;
 * @return {string}
 */
proto.xuperchain.InvokeRequest.prototype.getContractName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.InvokeRequest} returns this
 */
proto.xuperchain.InvokeRequest.prototype.setContractName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string method_name = 3;
 * @return {string}
 */
proto.xuperchain.InvokeRequest.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.InvokeRequest} returns this
 */
proto.xuperchain.InvokeRequest.prototype.setMethodName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, bytes> args = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!(string|Uint8Array)>}
 */
proto.xuperchain.InvokeRequest.prototype.getArgsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!(string|Uint8Array)>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.xuperchain.InvokeRequest} returns this
 */
proto.xuperchain.InvokeRequest.prototype.clearArgsMap = function() {
  this.getArgsMap().clear();
  return this;};


/**
 * repeated ResourceLimit resource_limits = 5;
 * @return {!Array<!proto.xuperchain.ResourceLimit>}
 */
proto.xuperchain.InvokeRequest.prototype.getResourceLimitsList = function() {
  return /** @type{!Array<!proto.xuperchain.ResourceLimit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.ResourceLimit, 5));
};


/**
 * @param {!Array<!proto.xuperchain.ResourceLimit>} value
 * @return {!proto.xuperchain.InvokeRequest} returns this
*/
proto.xuperchain.InvokeRequest.prototype.setResourceLimitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.xuperchain.ResourceLimit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.ResourceLimit}
 */
proto.xuperchain.InvokeRequest.prototype.addResourceLimits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.xuperchain.ResourceLimit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.InvokeRequest} returns this
 */
proto.xuperchain.InvokeRequest.prototype.clearResourceLimitsList = function() {
  return this.setResourceLimitsList([]);
};


/**
 * optional string amount = 6;
 * @return {string}
 */
proto.xuperchain.InvokeRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.InvokeRequest} returns this
 */
proto.xuperchain.InvokeRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.InvokeResponse.repeatedFields_ = [1,2,3,5,6,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.InvokeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.InvokeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.InvokeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.InvokeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    proto.xuperchain.TxInputExt.toObject, includeInstance),
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.xuperchain.TxOutputExt.toObject, includeInstance),
    responseList: msg.getResponseList_asB64(),
    gasUsed: jspb.Message.getFieldWithDefault(msg, 4, 0),
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.xuperchain.InvokeRequest.toObject, includeInstance),
    responsesList: jspb.Message.toObjectList(msg.getResponsesList(),
    proto.xuperchain.ContractResponse.toObject, includeInstance),
    utxoinputsList: jspb.Message.toObjectList(msg.getUtxoinputsList(),
    proto.xuperchain.TxInput.toObject, includeInstance),
    utxooutputsList: jspb.Message.toObjectList(msg.getUtxooutputsList(),
    proto.xuperchain.TxOutput.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.InvokeResponse}
 */
proto.xuperchain.InvokeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.InvokeResponse;
  return proto.xuperchain.InvokeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.InvokeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.InvokeResponse}
 */
proto.xuperchain.InvokeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.TxInputExt;
      reader.readMessage(value,proto.xuperchain.TxInputExt.deserializeBinaryFromReader);
      msg.addInputs(value);
      break;
    case 2:
      var value = new proto.xuperchain.TxOutputExt;
      reader.readMessage(value,proto.xuperchain.TxOutputExt.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addResponse(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGasUsed(value);
      break;
    case 5:
      var value = new proto.xuperchain.InvokeRequest;
      reader.readMessage(value,proto.xuperchain.InvokeRequest.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    case 6:
      var value = new proto.xuperchain.ContractResponse;
      reader.readMessage(value,proto.xuperchain.ContractResponse.deserializeBinaryFromReader);
      msg.addResponses(value);
      break;
    case 7:
      var value = new proto.xuperchain.TxInput;
      reader.readMessage(value,proto.xuperchain.TxInput.deserializeBinaryFromReader);
      msg.addUtxoinputs(value);
      break;
    case 8:
      var value = new proto.xuperchain.TxOutput;
      reader.readMessage(value,proto.xuperchain.TxOutput.deserializeBinaryFromReader);
      msg.addUtxooutputs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.InvokeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.InvokeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.InvokeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.InvokeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.xuperchain.TxInputExt.serializeBinaryToWriter
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.xuperchain.TxOutputExt.serializeBinaryToWriter
    );
  }
  f = message.getResponseList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
  f = message.getGasUsed();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.xuperchain.InvokeRequest.serializeBinaryToWriter
    );
  }
  f = message.getResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.xuperchain.ContractResponse.serializeBinaryToWriter
    );
  }
  f = message.getUtxoinputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.xuperchain.TxInput.serializeBinaryToWriter
    );
  }
  f = message.getUtxooutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.xuperchain.TxOutput.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TxInputExt inputs = 1;
 * @return {!Array<!proto.xuperchain.TxInputExt>}
 */
proto.xuperchain.InvokeResponse.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.xuperchain.TxInputExt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TxInputExt, 1));
};


/**
 * @param {!Array<!proto.xuperchain.TxInputExt>} value
 * @return {!proto.xuperchain.InvokeResponse} returns this
*/
proto.xuperchain.InvokeResponse.prototype.setInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.xuperchain.TxInputExt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TxInputExt}
 */
proto.xuperchain.InvokeResponse.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.xuperchain.TxInputExt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.InvokeResponse} returns this
 */
proto.xuperchain.InvokeResponse.prototype.clearInputsList = function() {
  return this.setInputsList([]);
};


/**
 * repeated TxOutputExt outputs = 2;
 * @return {!Array<!proto.xuperchain.TxOutputExt>}
 */
proto.xuperchain.InvokeResponse.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.xuperchain.TxOutputExt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TxOutputExt, 2));
};


/**
 * @param {!Array<!proto.xuperchain.TxOutputExt>} value
 * @return {!proto.xuperchain.InvokeResponse} returns this
*/
proto.xuperchain.InvokeResponse.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.xuperchain.TxOutputExt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TxOutputExt}
 */
proto.xuperchain.InvokeResponse.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.xuperchain.TxOutputExt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.InvokeResponse} returns this
 */
proto.xuperchain.InvokeResponse.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};


/**
 * repeated bytes response = 3;
 * @return {!Array<string>}
 */
proto.xuperchain.InvokeResponse.prototype.getResponseList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * repeated bytes response = 3;
 * This is a type-conversion wrapper around `getResponseList()`
 * @return {!Array<string>}
 */
proto.xuperchain.InvokeResponse.prototype.getResponseList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getResponseList()));
};


/**
 * repeated bytes response = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResponseList()`
 * @return {!Array<!Uint8Array>}
 */
proto.xuperchain.InvokeResponse.prototype.getResponseList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getResponseList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.xuperchain.InvokeResponse} returns this
 */
proto.xuperchain.InvokeResponse.prototype.setResponseList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.InvokeResponse} returns this
 */
proto.xuperchain.InvokeResponse.prototype.addResponse = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.InvokeResponse} returns this
 */
proto.xuperchain.InvokeResponse.prototype.clearResponseList = function() {
  return this.setResponseList([]);
};


/**
 * optional int64 gas_used = 4;
 * @return {number}
 */
proto.xuperchain.InvokeResponse.prototype.getGasUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.InvokeResponse} returns this
 */
proto.xuperchain.InvokeResponse.prototype.setGasUsed = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated InvokeRequest requests = 5;
 * @return {!Array<!proto.xuperchain.InvokeRequest>}
 */
proto.xuperchain.InvokeResponse.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.xuperchain.InvokeRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.InvokeRequest, 5));
};


/**
 * @param {!Array<!proto.xuperchain.InvokeRequest>} value
 * @return {!proto.xuperchain.InvokeResponse} returns this
*/
proto.xuperchain.InvokeResponse.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.xuperchain.InvokeRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.InvokeRequest}
 */
proto.xuperchain.InvokeResponse.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.xuperchain.InvokeRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.InvokeResponse} returns this
 */
proto.xuperchain.InvokeResponse.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};


/**
 * repeated ContractResponse responses = 6;
 * @return {!Array<!proto.xuperchain.ContractResponse>}
 */
proto.xuperchain.InvokeResponse.prototype.getResponsesList = function() {
  return /** @type{!Array<!proto.xuperchain.ContractResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.ContractResponse, 6));
};


/**
 * @param {!Array<!proto.xuperchain.ContractResponse>} value
 * @return {!proto.xuperchain.InvokeResponse} returns this
*/
proto.xuperchain.InvokeResponse.prototype.setResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.xuperchain.ContractResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.ContractResponse}
 */
proto.xuperchain.InvokeResponse.prototype.addResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.xuperchain.ContractResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.InvokeResponse} returns this
 */
proto.xuperchain.InvokeResponse.prototype.clearResponsesList = function() {
  return this.setResponsesList([]);
};


/**
 * repeated TxInput utxoInputs = 7;
 * @return {!Array<!proto.xuperchain.TxInput>}
 */
proto.xuperchain.InvokeResponse.prototype.getUtxoinputsList = function() {
  return /** @type{!Array<!proto.xuperchain.TxInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TxInput, 7));
};


/**
 * @param {!Array<!proto.xuperchain.TxInput>} value
 * @return {!proto.xuperchain.InvokeResponse} returns this
*/
proto.xuperchain.InvokeResponse.prototype.setUtxoinputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.xuperchain.TxInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TxInput}
 */
proto.xuperchain.InvokeResponse.prototype.addUtxoinputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.xuperchain.TxInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.InvokeResponse} returns this
 */
proto.xuperchain.InvokeResponse.prototype.clearUtxoinputsList = function() {
  return this.setUtxoinputsList([]);
};


/**
 * repeated TxOutput utxoOutputs = 8;
 * @return {!Array<!proto.xuperchain.TxOutput>}
 */
proto.xuperchain.InvokeResponse.prototype.getUtxooutputsList = function() {
  return /** @type{!Array<!proto.xuperchain.TxOutput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.TxOutput, 8));
};


/**
 * @param {!Array<!proto.xuperchain.TxOutput>} value
 * @return {!proto.xuperchain.InvokeResponse} returns this
*/
proto.xuperchain.InvokeResponse.prototype.setUtxooutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.xuperchain.TxOutput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.TxOutput}
 */
proto.xuperchain.InvokeResponse.prototype.addUtxooutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.xuperchain.TxOutput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.InvokeResponse} returns this
 */
proto.xuperchain.InvokeResponse.prototype.clearUtxooutputsList = function() {
  return this.setUtxooutputsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.TxInputExt.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.TxInputExt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.TxInputExt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxInputExt.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: msg.getKey_asB64(),
    refTxid: msg.getRefTxid_asB64(),
    refOffset: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.TxInputExt}
 */
proto.xuperchain.TxInputExt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.TxInputExt;
  return proto.xuperchain.TxInputExt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.TxInputExt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.TxInputExt}
 */
proto.xuperchain.TxInputExt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucket(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRefTxid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRefOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.TxInputExt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.TxInputExt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.TxInputExt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxInputExt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getRefTxid_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getRefOffset();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string bucket = 1;
 * @return {string}
 */
proto.xuperchain.TxInputExt.prototype.getBucket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TxInputExt} returns this
 */
proto.xuperchain.TxInputExt.prototype.setBucket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes key = 2;
 * @return {string}
 */
proto.xuperchain.TxInputExt.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.xuperchain.TxInputExt.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxInputExt.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxInputExt} returns this
 */
proto.xuperchain.TxInputExt.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes ref_txid = 3;
 * @return {string}
 */
proto.xuperchain.TxInputExt.prototype.getRefTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes ref_txid = 3;
 * This is a type-conversion wrapper around `getRefTxid()`
 * @return {string}
 */
proto.xuperchain.TxInputExt.prototype.getRefTxid_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRefTxid()));
};


/**
 * optional bytes ref_txid = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRefTxid()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxInputExt.prototype.getRefTxid_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRefTxid()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxInputExt} returns this
 */
proto.xuperchain.TxInputExt.prototype.setRefTxid = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional int32 ref_offset = 4;
 * @return {number}
 */
proto.xuperchain.TxInputExt.prototype.getRefOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.TxInputExt} returns this
 */
proto.xuperchain.TxInputExt.prototype.setRefOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.TxOutputExt.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.TxOutputExt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.TxOutputExt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxOutputExt.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: msg.getKey_asB64(),
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.TxOutputExt}
 */
proto.xuperchain.TxOutputExt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.TxOutputExt;
  return proto.xuperchain.TxOutputExt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.TxOutputExt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.TxOutputExt}
 */
proto.xuperchain.TxOutputExt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucket(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.TxOutputExt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.TxOutputExt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.TxOutputExt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.TxOutputExt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string bucket = 1;
 * @return {string}
 */
proto.xuperchain.TxOutputExt.prototype.getBucket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.TxOutputExt} returns this
 */
proto.xuperchain.TxOutputExt.prototype.setBucket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes key = 2;
 * @return {string}
 */
proto.xuperchain.TxOutputExt.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.xuperchain.TxOutputExt.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxOutputExt.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxOutputExt} returns this
 */
proto.xuperchain.TxOutputExt.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes value = 3;
 * @return {string}
 */
proto.xuperchain.TxOutputExt.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes value = 3;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.xuperchain.TxOutputExt.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.xuperchain.TxOutputExt.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.TxOutputExt} returns this
 */
proto.xuperchain.TxOutputExt.prototype.setValue = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.SignatureInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.SignatureInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.SignatureInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.SignatureInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    publickey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sign: msg.getSign_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.SignatureInfo}
 */
proto.xuperchain.SignatureInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.SignatureInfo;
  return proto.xuperchain.SignatureInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.SignatureInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.SignatureInfo}
 */
proto.xuperchain.SignatureInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublickey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.SignatureInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.SignatureInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.SignatureInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.SignatureInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublickey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSign_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string PublicKey = 1;
 * @return {string}
 */
proto.xuperchain.SignatureInfo.prototype.getPublickey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.SignatureInfo} returns this
 */
proto.xuperchain.SignatureInfo.prototype.setPublickey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes Sign = 2;
 * @return {string}
 */
proto.xuperchain.SignatureInfo.prototype.getSign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Sign = 2;
 * This is a type-conversion wrapper around `getSign()`
 * @return {string}
 */
proto.xuperchain.SignatureInfo.prototype.getSign_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSign()));
};


/**
 * optional bytes Sign = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSign()`
 * @return {!Uint8Array}
 */
proto.xuperchain.SignatureInfo.prototype.getSign_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSign()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.SignatureInfo} returns this
 */
proto.xuperchain.SignatureInfo.prototype.setSign = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.PermissionModel.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.PermissionModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.PermissionModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.PermissionModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    rule: jspb.Message.getFieldWithDefault(msg, 1, 0),
    acceptvalue: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.PermissionModel}
 */
proto.xuperchain.PermissionModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.PermissionModel;
  return proto.xuperchain.PermissionModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.PermissionModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.PermissionModel}
 */
proto.xuperchain.PermissionModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.xuperchain.PermissionRule} */ (reader.readEnum());
      msg.setRule(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAcceptvalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.PermissionModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.PermissionModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.PermissionModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.PermissionModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRule();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAcceptvalue();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional PermissionRule rule = 1;
 * @return {!proto.xuperchain.PermissionRule}
 */
proto.xuperchain.PermissionModel.prototype.getRule = function() {
  return /** @type {!proto.xuperchain.PermissionRule} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.xuperchain.PermissionRule} value
 * @return {!proto.xuperchain.PermissionModel} returns this
 */
proto.xuperchain.PermissionModel.prototype.setRule = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional double acceptValue = 2;
 * @return {number}
 */
proto.xuperchain.PermissionModel.prototype.getAcceptvalue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.PermissionModel} returns this
 */
proto.xuperchain.PermissionModel.prototype.setAcceptvalue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.AkSet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.AkSet.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.AkSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.AkSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AkSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    aksList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.AkSet}
 */
proto.xuperchain.AkSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.AkSet;
  return proto.xuperchain.AkSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.AkSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.AkSet}
 */
proto.xuperchain.AkSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.AkSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.AkSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.AkSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AkSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string aks = 1;
 * @return {!Array<string>}
 */
proto.xuperchain.AkSet.prototype.getAksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xuperchain.AkSet} returns this
 */
proto.xuperchain.AkSet.prototype.setAksList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.AkSet} returns this
 */
proto.xuperchain.AkSet.prototype.addAks = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.AkSet} returns this
 */
proto.xuperchain.AkSet.prototype.clearAksList = function() {
  return this.setAksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.AkSets.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.AkSets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.AkSets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AkSets.toObject = function(includeInstance, msg) {
  var f, obj = {
    setsMap: (f = msg.getSetsMap()) ? f.toObject(includeInstance, proto.xuperchain.AkSet.toObject) : [],
    expression: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.AkSets}
 */
proto.xuperchain.AkSets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.AkSets;
  return proto.xuperchain.AkSets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.AkSets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.AkSets}
 */
proto.xuperchain.AkSets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getSetsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.xuperchain.AkSet.deserializeBinaryFromReader, "", new proto.xuperchain.AkSet());
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpression(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.AkSets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.AkSets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.AkSets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AkSets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.xuperchain.AkSet.serializeBinaryToWriter);
  }
  f = message.getExpression();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * map<string, AkSet> sets = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.xuperchain.AkSet>}
 */
proto.xuperchain.AkSets.prototype.getSetsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.xuperchain.AkSet>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.xuperchain.AkSet));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.xuperchain.AkSets} returns this
 */
proto.xuperchain.AkSets.prototype.clearSetsMap = function() {
  this.getSetsMap().clear();
  return this;};


/**
 * optional string expression = 2;
 * @return {string}
 */
proto.xuperchain.AkSets.prototype.getExpression = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.AkSets} returns this
 */
proto.xuperchain.AkSets.prototype.setExpression = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.Acl.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.Acl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.Acl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.Acl.toObject = function(includeInstance, msg) {
  var f, obj = {
    pm: (f = msg.getPm()) && proto.xuperchain.PermissionModel.toObject(includeInstance, f),
    aksweightMap: (f = msg.getAksweightMap()) ? f.toObject(includeInstance, undefined) : [],
    aksets: (f = msg.getAksets()) && proto.xuperchain.AkSets.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.Acl}
 */
proto.xuperchain.Acl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.Acl;
  return proto.xuperchain.Acl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.Acl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.Acl}
 */
proto.xuperchain.Acl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.PermissionModel;
      reader.readMessage(value,proto.xuperchain.PermissionModel.deserializeBinaryFromReader);
      msg.setPm(value);
      break;
    case 2:
      var value = msg.getAksweightMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readDouble, null, "", 0.0);
         });
      break;
    case 3:
      var value = new proto.xuperchain.AkSets;
      reader.readMessage(value,proto.xuperchain.AkSets.deserializeBinaryFromReader);
      msg.setAksets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.Acl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.Acl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.Acl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.Acl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPm();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.PermissionModel.serializeBinaryToWriter
    );
  }
  f = message.getAksweightMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeDouble);
  }
  f = message.getAksets();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.xuperchain.AkSets.serializeBinaryToWriter
    );
  }
};


/**
 * optional PermissionModel pm = 1;
 * @return {?proto.xuperchain.PermissionModel}
 */
proto.xuperchain.Acl.prototype.getPm = function() {
  return /** @type{?proto.xuperchain.PermissionModel} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.PermissionModel, 1));
};


/**
 * @param {?proto.xuperchain.PermissionModel|undefined} value
 * @return {!proto.xuperchain.Acl} returns this
*/
proto.xuperchain.Acl.prototype.setPm = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.Acl} returns this
 */
proto.xuperchain.Acl.prototype.clearPm = function() {
  return this.setPm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.Acl.prototype.hasPm = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, double> aksWeight = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.xuperchain.Acl.prototype.getAksweightMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.xuperchain.Acl} returns this
 */
proto.xuperchain.Acl.prototype.clearAksweightMap = function() {
  this.getAksweightMap().clear();
  return this;};


/**
 * optional AkSets akSets = 3;
 * @return {?proto.xuperchain.AkSets}
 */
proto.xuperchain.Acl.prototype.getAksets = function() {
  return /** @type{?proto.xuperchain.AkSets} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.AkSets, 3));
};


/**
 * @param {?proto.xuperchain.AkSets|undefined} value
 * @return {!proto.xuperchain.Acl} returns this
*/
proto.xuperchain.Acl.prototype.setAksets = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.Acl} returns this
 */
proto.xuperchain.Acl.prototype.clearAksets = function() {
  return this.setAksets(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.Acl.prototype.hasAksets = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.AclStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.AclStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.AclStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AclStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    contractname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    methodname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    confirmed: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    acl: (f = msg.getAcl()) && proto.xuperchain.Acl.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.AclStatus}
 */
proto.xuperchain.AclStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.AclStatus;
  return proto.xuperchain.AclStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.AclStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.AclStatus}
 */
proto.xuperchain.AclStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodname(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConfirmed(value);
      break;
    case 7:
      var value = new proto.xuperchain.Acl;
      reader.readMessage(value,proto.xuperchain.Acl.deserializeBinaryFromReader);
      msg.setAcl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.AclStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.AclStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.AclStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AclStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccountname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContractname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMethodname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getConfirmed();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getAcl();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.xuperchain.Acl.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.AclStatus.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.AclStatus} returns this
*/
proto.xuperchain.AclStatus.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.AclStatus} returns this
 */
proto.xuperchain.AclStatus.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.AclStatus.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.AclStatus.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.AclStatus} returns this
 */
proto.xuperchain.AclStatus.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string accountName = 3;
 * @return {string}
 */
proto.xuperchain.AclStatus.prototype.getAccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.AclStatus} returns this
 */
proto.xuperchain.AclStatus.prototype.setAccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string contractName = 4;
 * @return {string}
 */
proto.xuperchain.AclStatus.prototype.getContractname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.AclStatus} returns this
 */
proto.xuperchain.AclStatus.prototype.setContractname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string methodName = 5;
 * @return {string}
 */
proto.xuperchain.AclStatus.prototype.getMethodname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.AclStatus} returns this
 */
proto.xuperchain.AclStatus.prototype.setMethodname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool confirmed = 6;
 * @return {boolean}
 */
proto.xuperchain.AclStatus.prototype.getConfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.AclStatus} returns this
 */
proto.xuperchain.AclStatus.prototype.setConfirmed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional Acl acl = 7;
 * @return {?proto.xuperchain.Acl}
 */
proto.xuperchain.AclStatus.prototype.getAcl = function() {
  return /** @type{?proto.xuperchain.Acl} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Acl, 7));
};


/**
 * @param {?proto.xuperchain.Acl|undefined} value
 * @return {!proto.xuperchain.AclStatus} returns this
*/
proto.xuperchain.AclStatus.prototype.setAcl = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.AclStatus} returns this
 */
proto.xuperchain.AclStatus.prototype.clearAcl = function() {
  return this.setAcl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.AclStatus.prototype.hasAcl = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.IdentityAuth.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.IdentityAuth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.IdentityAuth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.IdentityAuth.toObject = function(includeInstance, msg) {
  var f, obj = {
    sign: msg.getSign_asB64(),
    pubkey: msg.getPubkey_asB64(),
    addr: jspb.Message.getFieldWithDefault(msg, 3, ""),
    peerid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.IdentityAuth}
 */
proto.xuperchain.IdentityAuth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.IdentityAuth;
  return proto.xuperchain.IdentityAuth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.IdentityAuth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.IdentityAuth}
 */
proto.xuperchain.IdentityAuth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSign(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubkey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPeerid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.IdentityAuth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.IdentityAuth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.IdentityAuth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.IdentityAuth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSign_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPeerid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bytes sign = 1;
 * @return {string}
 */
proto.xuperchain.IdentityAuth.prototype.getSign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes sign = 1;
 * This is a type-conversion wrapper around `getSign()`
 * @return {string}
 */
proto.xuperchain.IdentityAuth.prototype.getSign_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSign()));
};


/**
 * optional bytes sign = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSign()`
 * @return {!Uint8Array}
 */
proto.xuperchain.IdentityAuth.prototype.getSign_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSign()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.IdentityAuth} returns this
 */
proto.xuperchain.IdentityAuth.prototype.setSign = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes pubkey = 2;
 * @return {string}
 */
proto.xuperchain.IdentityAuth.prototype.getPubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes pubkey = 2;
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {string}
 */
proto.xuperchain.IdentityAuth.prototype.getPubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubkey()));
};


/**
 * optional bytes pubkey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {!Uint8Array}
 */
proto.xuperchain.IdentityAuth.prototype.getPubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.IdentityAuth} returns this
 */
proto.xuperchain.IdentityAuth.prototype.setPubkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string addr = 3;
 * @return {string}
 */
proto.xuperchain.IdentityAuth.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.IdentityAuth} returns this
 */
proto.xuperchain.IdentityAuth.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string peerID = 4;
 * @return {string}
 */
proto.xuperchain.IdentityAuth.prototype.getPeerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.IdentityAuth} returns this
 */
proto.xuperchain.IdentityAuth.prototype.setPeerid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string timestamp = 5;
 * @return {string}
 */
proto.xuperchain.IdentityAuth.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.IdentityAuth} returns this
 */
proto.xuperchain.IdentityAuth.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.IdentityAuths.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.IdentityAuths.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.IdentityAuths.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.IdentityAuths} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.IdentityAuths.toObject = function(includeInstance, msg) {
  var f, obj = {
    authList: jspb.Message.toObjectList(msg.getAuthList(),
    proto.xuperchain.IdentityAuth.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.IdentityAuths}
 */
proto.xuperchain.IdentityAuths.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.IdentityAuths;
  return proto.xuperchain.IdentityAuths.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.IdentityAuths} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.IdentityAuths}
 */
proto.xuperchain.IdentityAuths.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.IdentityAuth;
      reader.readMessage(value,proto.xuperchain.IdentityAuth.deserializeBinaryFromReader);
      msg.addAuth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.IdentityAuths.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.IdentityAuths.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.IdentityAuths} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.IdentityAuths.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.xuperchain.IdentityAuth.serializeBinaryToWriter
    );
  }
};


/**
 * repeated IdentityAuth auth = 1;
 * @return {!Array<!proto.xuperchain.IdentityAuth>}
 */
proto.xuperchain.IdentityAuths.prototype.getAuthList = function() {
  return /** @type{!Array<!proto.xuperchain.IdentityAuth>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.IdentityAuth, 1));
};


/**
 * @param {!Array<!proto.xuperchain.IdentityAuth>} value
 * @return {!proto.xuperchain.IdentityAuths} returns this
*/
proto.xuperchain.IdentityAuths.prototype.setAuthList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.xuperchain.IdentityAuth=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.IdentityAuth}
 */
proto.xuperchain.IdentityAuths.prototype.addAuth = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.xuperchain.IdentityAuth, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.IdentityAuths} returns this
 */
proto.xuperchain.IdentityAuths.prototype.clearAuthList = function() {
  return this.setAuthList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.ResourceLimit.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.ResourceLimit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.ResourceLimit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ResourceLimit.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.ResourceLimit}
 */
proto.xuperchain.ResourceLimit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.ResourceLimit;
  return proto.xuperchain.ResourceLimit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.ResourceLimit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.ResourceLimit}
 */
proto.xuperchain.ResourceLimit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.xuperchain.ResourceType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.ResourceLimit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.ResourceLimit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.ResourceLimit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ResourceLimit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional ResourceType type = 1;
 * @return {!proto.xuperchain.ResourceType}
 */
proto.xuperchain.ResourceLimit.prototype.getType = function() {
  return /** @type {!proto.xuperchain.ResourceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.xuperchain.ResourceType} value
 * @return {!proto.xuperchain.ResourceLimit} returns this
 */
proto.xuperchain.ResourceLimit.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 limit = 2;
 * @return {number}
 */
proto.xuperchain.ResourceLimit.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.ResourceLimit} returns this
 */
proto.xuperchain.ResourceLimit.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.AK2AccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.AK2AccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.AK2AccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AK2AccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.AK2AccountRequest}
 */
proto.xuperchain.AK2AccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.AK2AccountRequest;
  return proto.xuperchain.AK2AccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.AK2AccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.AK2AccountRequest}
 */
proto.xuperchain.AK2AccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.AK2AccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.AK2AccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.AK2AccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AK2AccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.AK2AccountRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.AK2AccountRequest} returns this
*/
proto.xuperchain.AK2AccountRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.AK2AccountRequest} returns this
 */
proto.xuperchain.AK2AccountRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.AK2AccountRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.AK2AccountRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.AK2AccountRequest} returns this
 */
proto.xuperchain.AK2AccountRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.xuperchain.AK2AccountRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.AK2AccountRequest} returns this
 */
proto.xuperchain.AK2AccountRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.AK2AccountResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.AK2AccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.AK2AccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.AK2AccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AK2AccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.AK2AccountResponse}
 */
proto.xuperchain.AK2AccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.AK2AccountResponse;
  return proto.xuperchain.AK2AccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.AK2AccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.AK2AccountResponse}
 */
proto.xuperchain.AK2AccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.AK2AccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.AK2AccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.AK2AccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AK2AccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccountList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.AK2AccountResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.AK2AccountResponse} returns this
*/
proto.xuperchain.AK2AccountResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.AK2AccountResponse} returns this
 */
proto.xuperchain.AK2AccountResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.AK2AccountResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.AK2AccountResponse.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.AK2AccountResponse} returns this
 */
proto.xuperchain.AK2AccountResponse.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string account = 3;
 * @return {!Array<string>}
 */
proto.xuperchain.AK2AccountResponse.prototype.getAccountList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.xuperchain.AK2AccountResponse} returns this
 */
proto.xuperchain.AK2AccountResponse.prototype.setAccountList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.AK2AccountResponse} returns this
 */
proto.xuperchain.AK2AccountResponse.prototype.addAccount = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.AK2AccountResponse} returns this
 */
proto.xuperchain.AK2AccountResponse.prototype.clearAccountList = function() {
  return this.setAccountList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.GetAccountContractsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.GetAccountContractsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.GetAccountContractsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.GetAccountContractsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    account: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.GetAccountContractsRequest}
 */
proto.xuperchain.GetAccountContractsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.GetAccountContractsRequest;
  return proto.xuperchain.GetAccountContractsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.GetAccountContractsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.GetAccountContractsRequest}
 */
proto.xuperchain.GetAccountContractsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.GetAccountContractsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.GetAccountContractsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.GetAccountContractsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.GetAccountContractsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.GetAccountContractsRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.GetAccountContractsRequest} returns this
*/
proto.xuperchain.GetAccountContractsRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.GetAccountContractsRequest} returns this
 */
proto.xuperchain.GetAccountContractsRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.GetAccountContractsRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.GetAccountContractsRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.GetAccountContractsRequest} returns this
 */
proto.xuperchain.GetAccountContractsRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string account = 3;
 * @return {string}
 */
proto.xuperchain.GetAccountContractsRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.GetAccountContractsRequest} returns this
 */
proto.xuperchain.GetAccountContractsRequest.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.GetAccountContractsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.GetAccountContractsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.GetAccountContractsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.GetAccountContractsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.GetAccountContractsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    contractsStatusList: jspb.Message.toObjectList(msg.getContractsStatusList(),
    proto.xuperchain.ContractStatus.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.GetAccountContractsResponse}
 */
proto.xuperchain.GetAccountContractsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.GetAccountContractsResponse;
  return proto.xuperchain.GetAccountContractsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.GetAccountContractsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.GetAccountContractsResponse}
 */
proto.xuperchain.GetAccountContractsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.xuperchain.ContractStatus;
      reader.readMessage(value,proto.xuperchain.ContractStatus.deserializeBinaryFromReader);
      msg.addContractsStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.GetAccountContractsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.GetAccountContractsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.GetAccountContractsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.GetAccountContractsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getContractsStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.xuperchain.ContractStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.GetAccountContractsResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.GetAccountContractsResponse} returns this
*/
proto.xuperchain.GetAccountContractsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.GetAccountContractsResponse} returns this
 */
proto.xuperchain.GetAccountContractsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.GetAccountContractsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ContractStatus contracts_status = 2;
 * @return {!Array<!proto.xuperchain.ContractStatus>}
 */
proto.xuperchain.GetAccountContractsResponse.prototype.getContractsStatusList = function() {
  return /** @type{!Array<!proto.xuperchain.ContractStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.ContractStatus, 2));
};


/**
 * @param {!Array<!proto.xuperchain.ContractStatus>} value
 * @return {!proto.xuperchain.GetAccountContractsResponse} returns this
*/
proto.xuperchain.GetAccountContractsResponse.prototype.setContractsStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.xuperchain.ContractStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.ContractStatus}
 */
proto.xuperchain.GetAccountContractsResponse.prototype.addContractsStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.xuperchain.ContractStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.GetAccountContractsResponse} returns this
 */
proto.xuperchain.GetAccountContractsResponse.prototype.clearContractsStatusList = function() {
  return this.setContractsStatusList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.ContractStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.ContractStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.ContractStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ContractStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    txid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    desc: msg.getDesc_asB64(),
    isBanned: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    runtime: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.ContractStatus}
 */
proto.xuperchain.ContractStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.ContractStatus;
  return proto.xuperchain.ContractStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.ContractStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.ContractStatus}
 */
proto.xuperchain.ContractStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxid(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDesc(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsBanned(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRuntime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.ContractStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.ContractStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.ContractStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ContractStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTxid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDesc_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getIsBanned();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getRuntime();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string contract_name = 1;
 * @return {string}
 */
proto.xuperchain.ContractStatus.prototype.getContractName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.ContractStatus} returns this
 */
proto.xuperchain.ContractStatus.prototype.setContractName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string txid = 2;
 * @return {string}
 */
proto.xuperchain.ContractStatus.prototype.getTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.ContractStatus} returns this
 */
proto.xuperchain.ContractStatus.prototype.setTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes desc = 3;
 * @return {string}
 */
proto.xuperchain.ContractStatus.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes desc = 3;
 * This is a type-conversion wrapper around `getDesc()`
 * @return {string}
 */
proto.xuperchain.ContractStatus.prototype.getDesc_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDesc()));
};


/**
 * optional bytes desc = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDesc()`
 * @return {!Uint8Array}
 */
proto.xuperchain.ContractStatus.prototype.getDesc_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDesc()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.ContractStatus} returns this
 */
proto.xuperchain.ContractStatus.prototype.setDesc = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bool is_banned = 4;
 * @return {boolean}
 */
proto.xuperchain.ContractStatus.prototype.getIsBanned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.ContractStatus} returns this
 */
proto.xuperchain.ContractStatus.prototype.setIsBanned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.xuperchain.ContractStatus.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.ContractStatus} returns this
 */
proto.xuperchain.ContractStatus.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string runtime = 6;
 * @return {string}
 */
proto.xuperchain.ContractStatus.prototype.getRuntime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.ContractStatus} returns this
 */
proto.xuperchain.ContractStatus.prototype.setRuntime = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.PreExecWithSelectUTXORequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.PreExecWithSelectUTXORequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.PreExecWithSelectUTXORequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    totalamount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    signinfo: (f = msg.getSigninfo()) && proto.xuperchain.SignatureInfo.toObject(includeInstance, f),
    needlock: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    request: (f = msg.getRequest()) && proto.xuperchain.InvokeRPCRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.PreExecWithSelectUTXORequest}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.PreExecWithSelectUTXORequest;
  return proto.xuperchain.PreExecWithSelectUTXORequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.PreExecWithSelectUTXORequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.PreExecWithSelectUTXORequest}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalamount(value);
      break;
    case 6:
      var value = new proto.xuperchain.SignatureInfo;
      reader.readMessage(value,proto.xuperchain.SignatureInfo.deserializeBinaryFromReader);
      msg.setSigninfo(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeedlock(value);
      break;
    case 5:
      var value = new proto.xuperchain.InvokeRPCRequest;
      reader.readMessage(value,proto.xuperchain.InvokeRPCRequest.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.PreExecWithSelectUTXORequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.PreExecWithSelectUTXORequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.PreExecWithSelectUTXORequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTotalamount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getSigninfo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.xuperchain.SignatureInfo.serializeBinaryToWriter
    );
  }
  f = message.getNeedlock();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.xuperchain.InvokeRPCRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.PreExecWithSelectUTXORequest} returns this
*/
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.PreExecWithSelectUTXORequest} returns this
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.PreExecWithSelectUTXORequest} returns this
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.PreExecWithSelectUTXORequest} returns this
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 totalAmount = 4;
 * @return {number}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.getTotalamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.PreExecWithSelectUTXORequest} returns this
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.setTotalamount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional SignatureInfo signInfo = 6;
 * @return {?proto.xuperchain.SignatureInfo}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.getSigninfo = function() {
  return /** @type{?proto.xuperchain.SignatureInfo} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.SignatureInfo, 6));
};


/**
 * @param {?proto.xuperchain.SignatureInfo|undefined} value
 * @return {!proto.xuperchain.PreExecWithSelectUTXORequest} returns this
*/
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.setSigninfo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.PreExecWithSelectUTXORequest} returns this
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.clearSigninfo = function() {
  return this.setSigninfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.hasSigninfo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool needLock = 7;
 * @return {boolean}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.getNeedlock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.PreExecWithSelectUTXORequest} returns this
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.setNeedlock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional InvokeRPCRequest request = 5;
 * @return {?proto.xuperchain.InvokeRPCRequest}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.getRequest = function() {
  return /** @type{?proto.xuperchain.InvokeRPCRequest} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.InvokeRPCRequest, 5));
};


/**
 * @param {?proto.xuperchain.InvokeRPCRequest|undefined} value
 * @return {!proto.xuperchain.PreExecWithSelectUTXORequest} returns this
*/
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.PreExecWithSelectUTXORequest} returns this
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.PreExecWithSelectUTXORequest.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.PreExecWithSelectUTXOResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.PreExecWithSelectUTXOResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    response: (f = msg.getResponse()) && proto.xuperchain.InvokeResponse.toObject(includeInstance, f),
    utxooutput: (f = msg.getUtxooutput()) && proto.xuperchain.UtxoOutput.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.PreExecWithSelectUTXOResponse}
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.PreExecWithSelectUTXOResponse;
  return proto.xuperchain.PreExecWithSelectUTXOResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.PreExecWithSelectUTXOResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.PreExecWithSelectUTXOResponse}
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = new proto.xuperchain.InvokeResponse;
      reader.readMessage(value,proto.xuperchain.InvokeResponse.deserializeBinaryFromReader);
      msg.setResponse(value);
      break;
    case 4:
      var value = new proto.xuperchain.UtxoOutput;
      reader.readMessage(value,proto.xuperchain.UtxoOutput.deserializeBinaryFromReader);
      msg.setUtxooutput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.PreExecWithSelectUTXOResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.PreExecWithSelectUTXOResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.xuperchain.InvokeResponse.serializeBinaryToWriter
    );
  }
  f = message.getUtxooutput();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.xuperchain.UtxoOutput.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.PreExecWithSelectUTXOResponse} returns this
*/
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.PreExecWithSelectUTXOResponse} returns this
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.PreExecWithSelectUTXOResponse} returns this
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional InvokeResponse response = 3;
 * @return {?proto.xuperchain.InvokeResponse}
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.getResponse = function() {
  return /** @type{?proto.xuperchain.InvokeResponse} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.InvokeResponse, 3));
};


/**
 * @param {?proto.xuperchain.InvokeResponse|undefined} value
 * @return {!proto.xuperchain.PreExecWithSelectUTXOResponse} returns this
*/
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.PreExecWithSelectUTXOResponse} returns this
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional UtxoOutput utxoOutput = 4;
 * @return {?proto.xuperchain.UtxoOutput}
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.getUtxooutput = function() {
  return /** @type{?proto.xuperchain.UtxoOutput} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.UtxoOutput, 4));
};


/**
 * @param {?proto.xuperchain.UtxoOutput|undefined} value
 * @return {!proto.xuperchain.PreExecWithSelectUTXOResponse} returns this
*/
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.setUtxooutput = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.PreExecWithSelectUTXOResponse} returns this
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.clearUtxooutput = function() {
  return this.setUtxooutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.PreExecWithSelectUTXOResponse.prototype.hasUtxooutput = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.ContractResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.ContractResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.ContractResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ContractResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    body: msg.getBody_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.ContractResponse}
 */
proto.xuperchain.ContractResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.ContractResponse;
  return proto.xuperchain.ContractResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.ContractResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.ContractResponse}
 */
proto.xuperchain.ContractResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.ContractResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.ContractResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.ContractResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ContractResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBody_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional int32 status = 1;
 * @return {number}
 */
proto.xuperchain.ContractResponse.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.ContractResponse} returns this
 */
proto.xuperchain.ContractResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.xuperchain.ContractResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.ContractResponse} returns this
 */
proto.xuperchain.ContractResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes body = 3;
 * @return {string}
 */
proto.xuperchain.ContractResponse.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes body = 3;
 * This is a type-conversion wrapper around `getBody()`
 * @return {string}
 */
proto.xuperchain.ContractResponse.prototype.getBody_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBody()));
};


/**
 * optional bytes body = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBody()`
 * @return {!Uint8Array}
 */
proto.xuperchain.ContractResponse.prototype.getBody_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBody()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.ContractResponse} returns this
 */
proto.xuperchain.ContractResponse.prototype.setBody = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.ModifyBlock.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.ModifyBlock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.ModifyBlock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ModifyBlock.toObject = function(includeInstance, msg) {
  var f, obj = {
    effectiveTxid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marked: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    effectiveHeight: jspb.Message.getFieldWithDefault(msg, 3, 0),
    publicKey: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sign: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.ModifyBlock}
 */
proto.xuperchain.ModifyBlock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.ModifyBlock;
  return proto.xuperchain.ModifyBlock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.ModifyBlock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.ModifyBlock}
 */
proto.xuperchain.ModifyBlock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEffectiveTxid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMarked(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEffectiveHeight(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicKey(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSign(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.ModifyBlock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.ModifyBlock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.ModifyBlock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ModifyBlock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEffectiveTxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarked();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getEffectiveHeight();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPublicKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSign();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string effective_txid = 1;
 * @return {string}
 */
proto.xuperchain.ModifyBlock.prototype.getEffectiveTxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.ModifyBlock} returns this
 */
proto.xuperchain.ModifyBlock.prototype.setEffectiveTxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool marked = 2;
 * @return {boolean}
 */
proto.xuperchain.ModifyBlock.prototype.getMarked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.ModifyBlock} returns this
 */
proto.xuperchain.ModifyBlock.prototype.setMarked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int64 effective_height = 3;
 * @return {number}
 */
proto.xuperchain.ModifyBlock.prototype.getEffectiveHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.ModifyBlock} returns this
 */
proto.xuperchain.ModifyBlock.prototype.setEffectiveHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string public_key = 4;
 * @return {string}
 */
proto.xuperchain.ModifyBlock.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.ModifyBlock} returns this
 */
proto.xuperchain.ModifyBlock.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string sign = 5;
 * @return {string}
 */
proto.xuperchain.ModifyBlock.prototype.getSign = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.ModifyBlock} returns this
 */
proto.xuperchain.ModifyBlock.prototype.setSign = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.HDInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.HDInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.HDInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.HDInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    hdPublicKey: msg.getHdPublicKey_asB64(),
    originalHash: msg.getOriginalHash_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.HDInfo}
 */
proto.xuperchain.HDInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.HDInfo;
  return proto.xuperchain.HDInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.HDInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.HDInfo}
 */
proto.xuperchain.HDInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHdPublicKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOriginalHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.HDInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.HDInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.HDInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.HDInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHdPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOriginalHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes hd_public_key = 1;
 * @return {string}
 */
proto.xuperchain.HDInfo.prototype.getHdPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes hd_public_key = 1;
 * This is a type-conversion wrapper around `getHdPublicKey()`
 * @return {string}
 */
proto.xuperchain.HDInfo.prototype.getHdPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHdPublicKey()));
};


/**
 * optional bytes hd_public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHdPublicKey()`
 * @return {!Uint8Array}
 */
proto.xuperchain.HDInfo.prototype.getHdPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHdPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.HDInfo} returns this
 */
proto.xuperchain.HDInfo.prototype.setHdPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes original_hash = 2;
 * @return {string}
 */
proto.xuperchain.HDInfo.prototype.getOriginalHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes original_hash = 2;
 * This is a type-conversion wrapper around `getOriginalHash()`
 * @return {string}
 */
proto.xuperchain.HDInfo.prototype.getOriginalHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOriginalHash()));
};


/**
 * optional bytes original_hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOriginalHash()`
 * @return {!Uint8Array}
 */
proto.xuperchain.HDInfo.prototype.getOriginalHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOriginalHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.xuperchain.HDInfo} returns this
 */
proto.xuperchain.HDInfo.prototype.setOriginalHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.UtxoRecordDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.UtxoRecordDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.UtxoRecordDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.UtxoRecordDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    openutxorecord: (f = msg.getOpenutxorecord()) && proto.xuperchain.UtxoRecord.toObject(includeInstance, f),
    lockedutxorecord: (f = msg.getLockedutxorecord()) && proto.xuperchain.UtxoRecord.toObject(includeInstance, f),
    frozenutxorecord: (f = msg.getFrozenutxorecord()) && proto.xuperchain.UtxoRecord.toObject(includeInstance, f),
    displaycount: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.UtxoRecordDetail}
 */
proto.xuperchain.UtxoRecordDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.UtxoRecordDetail;
  return proto.xuperchain.UtxoRecordDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.UtxoRecordDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.UtxoRecordDetail}
 */
proto.xuperchain.UtxoRecordDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountname(value);
      break;
    case 4:
      var value = new proto.xuperchain.UtxoRecord;
      reader.readMessage(value,proto.xuperchain.UtxoRecord.deserializeBinaryFromReader);
      msg.setOpenutxorecord(value);
      break;
    case 5:
      var value = new proto.xuperchain.UtxoRecord;
      reader.readMessage(value,proto.xuperchain.UtxoRecord.deserializeBinaryFromReader);
      msg.setLockedutxorecord(value);
      break;
    case 6:
      var value = new proto.xuperchain.UtxoRecord;
      reader.readMessage(value,proto.xuperchain.UtxoRecord.deserializeBinaryFromReader);
      msg.setFrozenutxorecord(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDisplaycount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.UtxoRecordDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.UtxoRecordDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.UtxoRecordDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.UtxoRecordDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccountname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOpenutxorecord();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.xuperchain.UtxoRecord.serializeBinaryToWriter
    );
  }
  f = message.getLockedutxorecord();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.xuperchain.UtxoRecord.serializeBinaryToWriter
    );
  }
  f = message.getFrozenutxorecord();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.xuperchain.UtxoRecord.serializeBinaryToWriter
    );
  }
  f = message.getDisplaycount();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.UtxoRecordDetail.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.UtxoRecordDetail} returns this
*/
proto.xuperchain.UtxoRecordDetail.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.UtxoRecordDetail} returns this
 */
proto.xuperchain.UtxoRecordDetail.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.UtxoRecordDetail.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.UtxoRecordDetail.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoRecordDetail} returns this
 */
proto.xuperchain.UtxoRecordDetail.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string accountName = 3;
 * @return {string}
 */
proto.xuperchain.UtxoRecordDetail.prototype.getAccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoRecordDetail} returns this
 */
proto.xuperchain.UtxoRecordDetail.prototype.setAccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional UtxoRecord openUtxoRecord = 4;
 * @return {?proto.xuperchain.UtxoRecord}
 */
proto.xuperchain.UtxoRecordDetail.prototype.getOpenutxorecord = function() {
  return /** @type{?proto.xuperchain.UtxoRecord} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.UtxoRecord, 4));
};


/**
 * @param {?proto.xuperchain.UtxoRecord|undefined} value
 * @return {!proto.xuperchain.UtxoRecordDetail} returns this
*/
proto.xuperchain.UtxoRecordDetail.prototype.setOpenutxorecord = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.UtxoRecordDetail} returns this
 */
proto.xuperchain.UtxoRecordDetail.prototype.clearOpenutxorecord = function() {
  return this.setOpenutxorecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.UtxoRecordDetail.prototype.hasOpenutxorecord = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UtxoRecord lockedUtxoRecord = 5;
 * @return {?proto.xuperchain.UtxoRecord}
 */
proto.xuperchain.UtxoRecordDetail.prototype.getLockedutxorecord = function() {
  return /** @type{?proto.xuperchain.UtxoRecord} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.UtxoRecord, 5));
};


/**
 * @param {?proto.xuperchain.UtxoRecord|undefined} value
 * @return {!proto.xuperchain.UtxoRecordDetail} returns this
*/
proto.xuperchain.UtxoRecordDetail.prototype.setLockedutxorecord = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.UtxoRecordDetail} returns this
 */
proto.xuperchain.UtxoRecordDetail.prototype.clearLockedutxorecord = function() {
  return this.setLockedutxorecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.UtxoRecordDetail.prototype.hasLockedutxorecord = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional UtxoRecord frozenUtxoRecord = 6;
 * @return {?proto.xuperchain.UtxoRecord}
 */
proto.xuperchain.UtxoRecordDetail.prototype.getFrozenutxorecord = function() {
  return /** @type{?proto.xuperchain.UtxoRecord} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.UtxoRecord, 6));
};


/**
 * @param {?proto.xuperchain.UtxoRecord|undefined} value
 * @return {!proto.xuperchain.UtxoRecordDetail} returns this
*/
proto.xuperchain.UtxoRecordDetail.prototype.setFrozenutxorecord = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.UtxoRecordDetail} returns this
 */
proto.xuperchain.UtxoRecordDetail.prototype.clearFrozenutxorecord = function() {
  return this.setFrozenutxorecord(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.UtxoRecordDetail.prototype.hasFrozenutxorecord = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 displayCount = 7;
 * @return {number}
 */
proto.xuperchain.UtxoRecordDetail.prototype.getDisplaycount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.UtxoRecordDetail} returns this
 */
proto.xuperchain.UtxoRecordDetail.prototype.setDisplaycount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.UtxoRecord.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.UtxoRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.UtxoRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.UtxoRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.UtxoRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    utxocount: jspb.Message.getFieldWithDefault(msg, 1, ""),
    utxoamount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    itemList: jspb.Message.toObjectList(msg.getItemList(),
    proto.xuperchain.UtxoKey.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.UtxoRecord}
 */
proto.xuperchain.UtxoRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.UtxoRecord;
  return proto.xuperchain.UtxoRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.UtxoRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.UtxoRecord}
 */
proto.xuperchain.UtxoRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUtxocount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUtxoamount(value);
      break;
    case 3:
      var value = new proto.xuperchain.UtxoKey;
      reader.readMessage(value,proto.xuperchain.UtxoKey.deserializeBinaryFromReader);
      msg.addItem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.UtxoRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.UtxoRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.UtxoRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.UtxoRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUtxocount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUtxoamount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getItemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.xuperchain.UtxoKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional string utxoCount = 1;
 * @return {string}
 */
proto.xuperchain.UtxoRecord.prototype.getUtxocount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoRecord} returns this
 */
proto.xuperchain.UtxoRecord.prototype.setUtxocount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string utxoAmount = 2;
 * @return {string}
 */
proto.xuperchain.UtxoRecord.prototype.getUtxoamount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoRecord} returns this
 */
proto.xuperchain.UtxoRecord.prototype.setUtxoamount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated UtxoKey item = 3;
 * @return {!Array<!proto.xuperchain.UtxoKey>}
 */
proto.xuperchain.UtxoRecord.prototype.getItemList = function() {
  return /** @type{!Array<!proto.xuperchain.UtxoKey>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.UtxoKey, 3));
};


/**
 * @param {!Array<!proto.xuperchain.UtxoKey>} value
 * @return {!proto.xuperchain.UtxoRecord} returns this
*/
proto.xuperchain.UtxoRecord.prototype.setItemList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.xuperchain.UtxoKey=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.UtxoKey}
 */
proto.xuperchain.UtxoRecord.prototype.addItem = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.xuperchain.UtxoKey, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.UtxoRecord} returns this
 */
proto.xuperchain.UtxoRecord.prototype.clearItemList = function() {
  return this.setItemList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.UtxoKey.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.UtxoKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.UtxoKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.UtxoKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    reftxid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    offset: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.UtxoKey}
 */
proto.xuperchain.UtxoKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.UtxoKey;
  return proto.xuperchain.UtxoKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.UtxoKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.UtxoKey}
 */
proto.xuperchain.UtxoKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReftxid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.UtxoKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.UtxoKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.UtxoKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.UtxoKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReftxid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string refTxid = 1;
 * @return {string}
 */
proto.xuperchain.UtxoKey.prototype.getReftxid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoKey} returns this
 */
proto.xuperchain.UtxoKey.prototype.setReftxid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string offset = 2;
 * @return {string}
 */
proto.xuperchain.UtxoKey.prototype.getOffset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoKey} returns this
 */
proto.xuperchain.UtxoKey.prototype.setOffset = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string amount = 3;
 * @return {string}
 */
proto.xuperchain.UtxoKey.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.UtxoKey} returns this
 */
proto.xuperchain.UtxoKey.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.ContractStatDataRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.ContractStatDataRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.ContractStatDataRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ContractStatDataRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.ContractStatDataRequest}
 */
proto.xuperchain.ContractStatDataRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.ContractStatDataRequest;
  return proto.xuperchain.ContractStatDataRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.ContractStatDataRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.ContractStatDataRequest}
 */
proto.xuperchain.ContractStatDataRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.ContractStatDataRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.ContractStatDataRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.ContractStatDataRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ContractStatDataRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.ContractStatDataRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.ContractStatDataRequest} returns this
*/
proto.xuperchain.ContractStatDataRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.ContractStatDataRequest} returns this
 */
proto.xuperchain.ContractStatDataRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.ContractStatDataRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.ContractStatDataRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.ContractStatDataRequest} returns this
 */
proto.xuperchain.ContractStatDataRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.ContractStatDataResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.ContractStatDataResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.ContractStatDataResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ContractStatDataResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.xuperchain.ContractStatData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.ContractStatDataResponse}
 */
proto.xuperchain.ContractStatDataResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.ContractStatDataResponse;
  return proto.xuperchain.ContractStatDataResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.ContractStatDataResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.ContractStatDataResponse}
 */
proto.xuperchain.ContractStatDataResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = new proto.xuperchain.ContractStatData;
      reader.readMessage(value,proto.xuperchain.ContractStatData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.ContractStatDataResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.ContractStatDataResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.ContractStatDataResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ContractStatDataResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.xuperchain.ContractStatData.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.ContractStatDataResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.ContractStatDataResponse} returns this
*/
proto.xuperchain.ContractStatDataResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.ContractStatDataResponse} returns this
 */
proto.xuperchain.ContractStatDataResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.ContractStatDataResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.ContractStatDataResponse.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.ContractStatDataResponse} returns this
 */
proto.xuperchain.ContractStatDataResponse.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ContractStatData data = 3;
 * @return {?proto.xuperchain.ContractStatData}
 */
proto.xuperchain.ContractStatDataResponse.prototype.getData = function() {
  return /** @type{?proto.xuperchain.ContractStatData} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.ContractStatData, 3));
};


/**
 * @param {?proto.xuperchain.ContractStatData|undefined} value
 * @return {!proto.xuperchain.ContractStatDataResponse} returns this
*/
proto.xuperchain.ContractStatDataResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.ContractStatDataResponse} returns this
 */
proto.xuperchain.ContractStatDataResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.ContractStatDataResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.ContractStatData.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.ContractStatData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.ContractStatData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ContractStatData.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    contractcount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.ContractStatData}
 */
proto.xuperchain.ContractStatData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.ContractStatData;
  return proto.xuperchain.ContractStatData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.ContractStatData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.ContractStatData}
 */
proto.xuperchain.ContractStatData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountcount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContractcount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.ContractStatData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.ContractStatData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.ContractStatData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ContractStatData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getContractcount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 accountCount = 1;
 * @return {number}
 */
proto.xuperchain.ContractStatData.prototype.getAccountcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.ContractStatData} returns this
 */
proto.xuperchain.ContractStatData.prototype.setAccountcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 contractCount = 2;
 * @return {number}
 */
proto.xuperchain.ContractStatData.prototype.getContractcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.xuperchain.ContractStatData} returns this
 */
proto.xuperchain.ContractStatData.prototype.setContractcount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.AddressContractsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.AddressContractsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.AddressContractsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AddressContractsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    bcname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    address: jspb.Message.getFieldWithDefault(msg, 3, ""),
    needContent: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.AddressContractsRequest}
 */
proto.xuperchain.AddressContractsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.AddressContractsRequest;
  return proto.xuperchain.AddressContractsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.AddressContractsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.AddressContractsRequest}
 */
proto.xuperchain.AddressContractsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBcname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeedContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.AddressContractsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.AddressContractsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.AddressContractsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AddressContractsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getBcname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNeedContent();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.AddressContractsRequest.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.AddressContractsRequest} returns this
*/
proto.xuperchain.AddressContractsRequest.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.AddressContractsRequest} returns this
 */
proto.xuperchain.AddressContractsRequest.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.AddressContractsRequest.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string bcname = 2;
 * @return {string}
 */
proto.xuperchain.AddressContractsRequest.prototype.getBcname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.AddressContractsRequest} returns this
 */
proto.xuperchain.AddressContractsRequest.prototype.setBcname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string address = 3;
 * @return {string}
 */
proto.xuperchain.AddressContractsRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.xuperchain.AddressContractsRequest} returns this
 */
proto.xuperchain.AddressContractsRequest.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool need_content = 4;
 * @return {boolean}
 */
proto.xuperchain.AddressContractsRequest.prototype.getNeedContent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.xuperchain.AddressContractsRequest} returns this
 */
proto.xuperchain.AddressContractsRequest.prototype.setNeedContent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xuperchain.ContractList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.ContractList.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.ContractList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.ContractList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ContractList.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractStatusList: jspb.Message.toObjectList(msg.getContractStatusList(),
    proto.xuperchain.ContractStatus.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.ContractList}
 */
proto.xuperchain.ContractList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.ContractList;
  return proto.xuperchain.ContractList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.ContractList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.ContractList}
 */
proto.xuperchain.ContractList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.ContractStatus;
      reader.readMessage(value,proto.xuperchain.ContractStatus.deserializeBinaryFromReader);
      msg.addContractStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.ContractList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.ContractList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.ContractList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.ContractList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractStatusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.xuperchain.ContractStatus.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ContractStatus contract_status = 1;
 * @return {!Array<!proto.xuperchain.ContractStatus>}
 */
proto.xuperchain.ContractList.prototype.getContractStatusList = function() {
  return /** @type{!Array<!proto.xuperchain.ContractStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.xuperchain.ContractStatus, 1));
};


/**
 * @param {!Array<!proto.xuperchain.ContractStatus>} value
 * @return {!proto.xuperchain.ContractList} returns this
*/
proto.xuperchain.ContractList.prototype.setContractStatusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.xuperchain.ContractStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xuperchain.ContractStatus}
 */
proto.xuperchain.ContractList.prototype.addContractStatus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.xuperchain.ContractStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xuperchain.ContractList} returns this
 */
proto.xuperchain.ContractList.prototype.clearContractStatusList = function() {
  return this.setContractStatusList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xuperchain.AddressContractsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xuperchain.AddressContractsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xuperchain.AddressContractsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AddressContractsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.xuperchain.Header.toObject(includeInstance, f),
    contractsMap: (f = msg.getContractsMap()) ? f.toObject(includeInstance, proto.xuperchain.ContractList.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xuperchain.AddressContractsResponse}
 */
proto.xuperchain.AddressContractsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xuperchain.AddressContractsResponse;
  return proto.xuperchain.AddressContractsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xuperchain.AddressContractsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xuperchain.AddressContractsResponse}
 */
proto.xuperchain.AddressContractsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.xuperchain.Header;
      reader.readMessage(value,proto.xuperchain.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = msg.getContractsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.xuperchain.ContractList.deserializeBinaryFromReader, "", new proto.xuperchain.ContractList());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xuperchain.AddressContractsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xuperchain.AddressContractsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xuperchain.AddressContractsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xuperchain.AddressContractsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.xuperchain.Header.serializeBinaryToWriter
    );
  }
  f = message.getContractsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.xuperchain.ContractList.serializeBinaryToWriter);
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.xuperchain.Header}
 */
proto.xuperchain.AddressContractsResponse.prototype.getHeader = function() {
  return /** @type{?proto.xuperchain.Header} */ (
    jspb.Message.getWrapperField(this, proto.xuperchain.Header, 1));
};


/**
 * @param {?proto.xuperchain.Header|undefined} value
 * @return {!proto.xuperchain.AddressContractsResponse} returns this
*/
proto.xuperchain.AddressContractsResponse.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xuperchain.AddressContractsResponse} returns this
 */
proto.xuperchain.AddressContractsResponse.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xuperchain.AddressContractsResponse.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, ContractList> contracts = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.xuperchain.ContractList>}
 */
proto.xuperchain.AddressContractsResponse.prototype.getContractsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.xuperchain.ContractList>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.xuperchain.ContractList));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.xuperchain.AddressContractsResponse} returns this
 */
proto.xuperchain.AddressContractsResponse.prototype.clearContractsMap = function() {
  this.getContractsMap().clear();
  return this;};


/**
 * @enum {number}
 */
proto.xuperchain.XChainErrorEnum = {
  SUCCESS: 0,
  UNKNOW_ERROR: 1,
  CONNECT_REFUSE: 2,
  NOT_ENOUGH_UTXO_ERROR: 3,
  UTXOVM_ALREADY_UNCONFIRM_ERROR: 4,
  UTXOVM_NOT_FOUND_ERROR: 5,
  INPUT_OUTPUT_NOT_EQUAL_ERROR: 6,
  TX_NOT_FOUND_ERROR: 7,
  TX_SIGN_ERROR: 8,
  BLOCKCHAIN_NOTEXIST: 9,
  VALIDATE_ERROR: 10,
  CANNOT_SYNC_BLOCK_ERROR: 11,
  CONFIRM_BLOCK_ERROR: 12,
  UTXOVM_PLAY_ERROR: 13,
  WALK_ERROR: 14,
  NOT_READY_ERROR: 15,
  BLOCK_EXIST_ERROR: 16,
  ROOT_BLOCK_EXIST_ERROR: 17,
  TX_DUPLICATE_ERROR: 19,
  SERVICE_REFUSED_ERROR: 20,
  TXDATA_SIGN_ERROR: 21,
  TX_SLE_ERROR: 25,
  TX_FEE_NOT_ENOUGH_ERROR: 26,
  UTXO_SIGN_ERROR: 28,
  DPOS_QUERY_ERROR: 31,
  RWSET_INVALID_ERROR: 33,
  RWACL_INVALID_ERROR: 34,
  GAS_NOT_ENOUGH_ERROR: 35,
  TX_VERSION_INVALID_ERROR: 36,
  COMPLIANCE_CHECK_NOT_APPROVED: 37,
  ACCOUNT_CONTRACT_STATUS_ERROR: 38,
  TX_VERIFICATION_ERROR: 40
};

/**
 * @enum {number}
 */
proto.xuperchain.TransactionStatus = {
  UNDEFINE: 0,
  NOEXIST: 1,
  CONFIRM: 2,
  FURCATION: 3,
  UNCONFIRM: 4,
  FAILED: 5
};

/**
 * @enum {number}
 */
proto.xuperchain.PermissionRule = {
  NULL: 0,
  SIGN_THRESHOLD: 1,
  SIGN_AKSET: 2,
  SIGN_RATE: 3,
  SIGN_SUM: 4,
  CA_SERVER: 5,
  COMMUNITY_VOTE: 6
};

/**
 * @enum {number}
 */
proto.xuperchain.ResourceType = {
  CPU: 0,
  MEMORY: 1,
  DISK: 2,
  XFEE: 3
};

goog.object.extend(exports, proto.xuperchain);
