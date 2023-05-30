// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var akari_proto_joints_controller_pb = require('../akari_proto/joints_controller_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_akari_proto_GetJointNamesResponse(arg) {
  if (!(arg instanceof akari_proto_joints_controller_pb.GetJointNamesResponse)) {
    throw new Error('Expected argument of type akari_proto.GetJointNamesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_GetJointNamesResponse(buffer_arg) {
  return akari_proto_joints_controller_pb.GetJointNamesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_GetMovingStateResponse(arg) {
  if (!(arg instanceof akari_proto_joints_controller_pb.GetMovingStateResponse)) {
    throw new Error('Expected argument of type akari_proto.GetMovingStateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_GetMovingStateResponse(buffer_arg) {
  return akari_proto_joints_controller_pb.GetMovingStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_GetPositionLimitResponse(arg) {
  if (!(arg instanceof akari_proto_joints_controller_pb.GetPositionLimitResponse)) {
    throw new Error('Expected argument of type akari_proto.GetPositionLimitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_GetPositionLimitResponse(buffer_arg) {
  return akari_proto_joints_controller_pb.GetPositionLimitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_GetPresentPositionResponse(arg) {
  if (!(arg instanceof akari_proto_joints_controller_pb.GetPresentPositionResponse)) {
    throw new Error('Expected argument of type akari_proto.GetPresentPositionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_GetPresentPositionResponse(buffer_arg) {
  return akari_proto_joints_controller_pb.GetPresentPositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_GetProfileAccelerationResponse(arg) {
  if (!(arg instanceof akari_proto_joints_controller_pb.GetProfileAccelerationResponse)) {
    throw new Error('Expected argument of type akari_proto.GetProfileAccelerationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_GetProfileAccelerationResponse(buffer_arg) {
  return akari_proto_joints_controller_pb.GetProfileAccelerationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_GetProfileVelocityResponse(arg) {
  if (!(arg instanceof akari_proto_joints_controller_pb.GetProfileVelocityResponse)) {
    throw new Error('Expected argument of type akari_proto.GetProfileVelocityResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_GetProfileVelocityResponse(buffer_arg) {
  return akari_proto_joints_controller_pb.GetProfileVelocityResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_GetServoEnabledResponse(arg) {
  if (!(arg instanceof akari_proto_joints_controller_pb.GetServoEnabledResponse)) {
    throw new Error('Expected argument of type akari_proto.GetServoEnabledResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_GetServoEnabledResponse(buffer_arg) {
  return akari_proto_joints_controller_pb.GetServoEnabledResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_JointSpecifier(arg) {
  if (!(arg instanceof akari_proto_joints_controller_pb.JointSpecifier)) {
    throw new Error('Expected argument of type akari_proto.JointSpecifier');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_JointSpecifier(buffer_arg) {
  return akari_proto_joints_controller_pb.JointSpecifier.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_SetGoalPositionRequest(arg) {
  if (!(arg instanceof akari_proto_joints_controller_pb.SetGoalPositionRequest)) {
    throw new Error('Expected argument of type akari_proto.SetGoalPositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_SetGoalPositionRequest(buffer_arg) {
  return akari_proto_joints_controller_pb.SetGoalPositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_SetProfileAccelerationRequest(arg) {
  if (!(arg instanceof akari_proto_joints_controller_pb.SetProfileAccelerationRequest)) {
    throw new Error('Expected argument of type akari_proto.SetProfileAccelerationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_SetProfileAccelerationRequest(buffer_arg) {
  return akari_proto_joints_controller_pb.SetProfileAccelerationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_SetProfileVelocityRequest(arg) {
  if (!(arg instanceof akari_proto_joints_controller_pb.SetProfileVelocityRequest)) {
    throw new Error('Expected argument of type akari_proto.SetProfileVelocityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_SetProfileVelocityRequest(buffer_arg) {
  return akari_proto_joints_controller_pb.SetProfileVelocityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_akari_proto_SetServoEnabledRequest(arg) {
  if (!(arg instanceof akari_proto_joints_controller_pb.SetServoEnabledRequest)) {
    throw new Error('Expected argument of type akari_proto.SetServoEnabledRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_akari_proto_SetServoEnabledRequest(buffer_arg) {
  return akari_proto_joints_controller_pb.SetServoEnabledRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


var JointsControllerServiceService = exports.JointsControllerServiceService = {
  getPositionLimit: {
    path: '/akari_proto.JointsControllerService/GetPositionLimit',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_joints_controller_pb.JointSpecifier,
    responseType: akari_proto_joints_controller_pb.GetPositionLimitResponse,
    requestSerialize: serialize_akari_proto_JointSpecifier,
    requestDeserialize: deserialize_akari_proto_JointSpecifier,
    responseSerialize: serialize_akari_proto_GetPositionLimitResponse,
    responseDeserialize: deserialize_akari_proto_GetPositionLimitResponse,
  },
  getJointNames: {
    path: '/akari_proto.JointsControllerService/GetJointNames',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: akari_proto_joints_controller_pb.GetJointNamesResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_akari_proto_GetJointNamesResponse,
    responseDeserialize: deserialize_akari_proto_GetJointNamesResponse,
  },
  getServoEnabled: {
    path: '/akari_proto.JointsControllerService/GetServoEnabled',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_joints_controller_pb.JointSpecifier,
    responseType: akari_proto_joints_controller_pb.GetServoEnabledResponse,
    requestSerialize: serialize_akari_proto_JointSpecifier,
    requestDeserialize: deserialize_akari_proto_JointSpecifier,
    responseSerialize: serialize_akari_proto_GetServoEnabledResponse,
    responseDeserialize: deserialize_akari_proto_GetServoEnabledResponse,
  },
  setServoEnabled: {
    path: '/akari_proto.JointsControllerService/SetServoEnabled',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_joints_controller_pb.SetServoEnabledRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_akari_proto_SetServoEnabledRequest,
    requestDeserialize: deserialize_akari_proto_SetServoEnabledRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  setProfileAcceleration: {
    path: '/akari_proto.JointsControllerService/SetProfileAcceleration',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_joints_controller_pb.SetProfileAccelerationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_akari_proto_SetProfileAccelerationRequest,
    requestDeserialize: deserialize_akari_proto_SetProfileAccelerationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getProfileAcceleration: {
    path: '/akari_proto.JointsControllerService/GetProfileAcceleration',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_joints_controller_pb.JointSpecifier,
    responseType: akari_proto_joints_controller_pb.GetProfileAccelerationResponse,
    requestSerialize: serialize_akari_proto_JointSpecifier,
    requestDeserialize: deserialize_akari_proto_JointSpecifier,
    responseSerialize: serialize_akari_proto_GetProfileAccelerationResponse,
    responseDeserialize: deserialize_akari_proto_GetProfileAccelerationResponse,
  },
  setProfileVelocity: {
    path: '/akari_proto.JointsControllerService/SetProfileVelocity',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_joints_controller_pb.SetProfileVelocityRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_akari_proto_SetProfileVelocityRequest,
    requestDeserialize: deserialize_akari_proto_SetProfileVelocityRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getProfileVelocity: {
    path: '/akari_proto.JointsControllerService/GetProfileVelocity',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_joints_controller_pb.JointSpecifier,
    responseType: akari_proto_joints_controller_pb.GetProfileVelocityResponse,
    requestSerialize: serialize_akari_proto_JointSpecifier,
    requestDeserialize: deserialize_akari_proto_JointSpecifier,
    responseSerialize: serialize_akari_proto_GetProfileVelocityResponse,
    responseDeserialize: deserialize_akari_proto_GetProfileVelocityResponse,
  },
  setGoalPosition: {
    path: '/akari_proto.JointsControllerService/SetGoalPosition',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_joints_controller_pb.SetGoalPositionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_akari_proto_SetGoalPositionRequest,
    requestDeserialize: deserialize_akari_proto_SetGoalPositionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getPresentPosition: {
    path: '/akari_proto.JointsControllerService/GetPresentPosition',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_joints_controller_pb.JointSpecifier,
    responseType: akari_proto_joints_controller_pb.GetPresentPositionResponse,
    requestSerialize: serialize_akari_proto_JointSpecifier,
    requestDeserialize: deserialize_akari_proto_JointSpecifier,
    responseSerialize: serialize_akari_proto_GetPresentPositionResponse,
    responseDeserialize: deserialize_akari_proto_GetPresentPositionResponse,
  },
  getMovingState: {
    path: '/akari_proto.JointsControllerService/GetMovingState',
    requestStream: false,
    responseStream: false,
    requestType: akari_proto_joints_controller_pb.JointSpecifier,
    responseType: akari_proto_joints_controller_pb.GetMovingStateResponse,
    requestSerialize: serialize_akari_proto_JointSpecifier,
    requestDeserialize: deserialize_akari_proto_JointSpecifier,
    responseSerialize: serialize_akari_proto_GetMovingStateResponse,
    responseDeserialize: deserialize_akari_proto_GetMovingStateResponse,
  },
};

exports.JointsControllerServiceClient = grpc.makeGenericClientConstructor(JointsControllerServiceService);
