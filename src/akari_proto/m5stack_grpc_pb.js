// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var akari_proto_m5stack_pb = require('./m5stack_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_akari_proto_M5StackStatus(arg) {
  if (!(arg instanceof akari_proto_m5stack_pb.M5StackStatus)) {
    throw new Error('Expected argument of type akari_proto.M5StackStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_M5StackStatus(buffer_arg) {
  return akari_proto_m5stack_pb.M5StackStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_ResetPinOutRequest(arg) {
  if (!(arg instanceof akari_proto_m5stack_pb.ResetPinOutRequest)) {
    throw new Error('Expected argument of type akari_proto.ResetPinOutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_ResetPinOutRequest(buffer_arg) {
  return akari_proto_m5stack_pb.ResetPinOutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_SetDisplayColorRequest(arg) {
  if (!(arg instanceof akari_proto_m5stack_pb.SetDisplayColorRequest)) {
    throw new Error('Expected argument of type akari_proto.SetDisplayColorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_SetDisplayColorRequest(buffer_arg) {
  return akari_proto_m5stack_pb.SetDisplayColorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_SetDisplayImageRequest(arg) {
  if (!(arg instanceof akari_proto_m5stack_pb.SetDisplayImageRequest)) {
    throw new Error('Expected argument of type akari_proto.SetDisplayImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_SetDisplayImageRequest(buffer_arg) {
  return akari_proto_m5stack_pb.SetDisplayImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_SetDisplayTextRequest(arg) {
  if (!(arg instanceof akari_proto_m5stack_pb.SetDisplayTextRequest)) {
    throw new Error('Expected argument of type akari_proto.SetDisplayTextRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_SetDisplayTextRequest(buffer_arg) {
  return akari_proto_m5stack_pb.SetDisplayTextRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_SetPinOutRequest(arg) {
  if (!(arg instanceof akari_proto_m5stack_pb.SetPinOutRequest)) {
    throw new Error('Expected argument of type akari_proto.SetPinOutRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_SetPinOutRequest(buffer_arg) {
  return akari_proto_m5stack_pb.SetPinOutRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var M5StackServiceService = exports.M5StackServiceService = {
  setPinOut: {
    path: '/akari_proto.M5StackService/SetPinOut',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_m5stack_pb.SetPinOutRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_akari_proto_SetPinOutRequest,
    requestDeserialize: deserialize_akari_proto_SetPinOutRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  resetPinOut: {
    path: '/akari_proto.M5StackService/ResetPinOut',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_m5stack_pb.ResetPinOutRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_akari_proto_ResetPinOutRequest,
    requestDeserialize: deserialize_akari_proto_ResetPinOutRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  setDisplayColor: {
    path: '/akari_proto.M5StackService/SetDisplayColor',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_m5stack_pb.SetDisplayColorRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_akari_proto_SetDisplayColorRequest,
    requestDeserialize: deserialize_akari_proto_SetDisplayColorRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  setDisplayText: {
    path: '/akari_proto.M5StackService/SetDisplayText',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_m5stack_pb.SetDisplayTextRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_akari_proto_SetDisplayTextRequest,
    requestDeserialize: deserialize_akari_proto_SetDisplayTextRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  setDisplayImage: {
    path: '/akari_proto.M5StackService/SetDisplayImage',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_m5stack_pb.SetDisplayImageRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_akari_proto_SetDisplayImageRequest,
    requestDeserialize: deserialize_akari_proto_SetDisplayImageRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  reset: {
    path: '/akari_proto.M5StackService/Reset',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  get: {
    path: '/akari_proto.M5StackService/Get',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: akari_proto_m5stack_pb.M5StackStatus,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_akari_proto_M5StackStatus,
    responseDeserialize: deserialize_akari_proto_M5StackStatus,
  },
  getStream: {
    path: '/akari_proto.M5StackService/GetStream',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: akari_proto_m5stack_pb.M5StackStatus,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_akari_proto_M5StackStatus,
    responseDeserialize: deserialize_akari_proto_M5StackStatus,
  },
};

exports.M5StackServiceClient = grpc.makeGenericClientConstructor(M5StackServiceService);
