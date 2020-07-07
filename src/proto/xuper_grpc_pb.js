// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_proto_xuper_pb = require('../../src/proto/xuper_pb.js');

function serialize_xuperchain_BCStatus(arg) {
  if (!(arg instanceof src_proto_xuper_pb.BCStatus)) {
    throw new Error('Expected argument of type xuperchain.BCStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_xuperchain_BCStatus(buffer_arg) {
  return src_proto_xuper_pb.BCStatus.deserializeBinary(new Uint8Array(buffer_arg));
}


var XChainService = exports.XChainService = {
  getBlockChainStatus: {
    path: '/xuperchain.XChain/GetBlockChainStatus',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_xuper_pb.BCStatus,
    responseType: src_proto_xuper_pb.BCStatus,
    requestSerialize: serialize_xuperchain_BCStatus,
    requestDeserialize: deserialize_xuperchain_BCStatus,
    responseSerialize: serialize_xuperchain_BCStatus,
    responseDeserialize: deserialize_xuperchain_BCStatus,
  },
};

exports.XChainClient = grpc.makeGenericClientConstructor(XChainService);
