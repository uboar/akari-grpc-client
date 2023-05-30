// package: akari_proto
// file: akari_proto/joints_controller.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as akari_proto_joints_controller_pb from "./joints_controller_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IJointsControllerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getPositionLimit: IJointsControllerServiceService_IGetPositionLimit;
    getJointNames: IJointsControllerServiceService_IGetJointNames;
    getServoEnabled: IJointsControllerServiceService_IGetServoEnabled;
    setServoEnabled: IJointsControllerServiceService_ISetServoEnabled;
    setProfileAcceleration: IJointsControllerServiceService_ISetProfileAcceleration;
    getProfileAcceleration: IJointsControllerServiceService_IGetProfileAcceleration;
    setProfileVelocity: IJointsControllerServiceService_ISetProfileVelocity;
    getProfileVelocity: IJointsControllerServiceService_IGetProfileVelocity;
    setGoalPosition: IJointsControllerServiceService_ISetGoalPosition;
    getPresentPosition: IJointsControllerServiceService_IGetPresentPosition;
    getMovingState: IJointsControllerServiceService_IGetMovingState;
}

interface IJointsControllerServiceService_IGetPositionLimit extends grpc.MethodDefinition<akari_proto_joints_controller_pb.JointSpecifier, akari_proto_joints_controller_pb.GetPositionLimitResponse> {
    path: "/akari_proto.JointsControllerService/GetPositionLimit";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_joints_controller_pb.JointSpecifier>;
    requestDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.JointSpecifier>;
    responseSerialize: grpc.serialize<akari_proto_joints_controller_pb.GetPositionLimitResponse>;
    responseDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.GetPositionLimitResponse>;
}
interface IJointsControllerServiceService_IGetJointNames extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, akari_proto_joints_controller_pb.GetJointNamesResponse> {
    path: "/akari_proto.JointsControllerService/GetJointNames";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<akari_proto_joints_controller_pb.GetJointNamesResponse>;
    responseDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.GetJointNamesResponse>;
}
interface IJointsControllerServiceService_IGetServoEnabled extends grpc.MethodDefinition<akari_proto_joints_controller_pb.JointSpecifier, akari_proto_joints_controller_pb.GetServoEnabledResponse> {
    path: "/akari_proto.JointsControllerService/GetServoEnabled";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_joints_controller_pb.JointSpecifier>;
    requestDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.JointSpecifier>;
    responseSerialize: grpc.serialize<akari_proto_joints_controller_pb.GetServoEnabledResponse>;
    responseDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.GetServoEnabledResponse>;
}
interface IJointsControllerServiceService_ISetServoEnabled extends grpc.MethodDefinition<akari_proto_joints_controller_pb.SetServoEnabledRequest, google_protobuf_empty_pb.Empty> {
    path: "/akari_proto.JointsControllerService/SetServoEnabled";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_joints_controller_pb.SetServoEnabledRequest>;
    requestDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.SetServoEnabledRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IJointsControllerServiceService_ISetProfileAcceleration extends grpc.MethodDefinition<akari_proto_joints_controller_pb.SetProfileAccelerationRequest, google_protobuf_empty_pb.Empty> {
    path: "/akari_proto.JointsControllerService/SetProfileAcceleration";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_joints_controller_pb.SetProfileAccelerationRequest>;
    requestDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.SetProfileAccelerationRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IJointsControllerServiceService_IGetProfileAcceleration extends grpc.MethodDefinition<akari_proto_joints_controller_pb.JointSpecifier, akari_proto_joints_controller_pb.GetProfileAccelerationResponse> {
    path: "/akari_proto.JointsControllerService/GetProfileAcceleration";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_joints_controller_pb.JointSpecifier>;
    requestDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.JointSpecifier>;
    responseSerialize: grpc.serialize<akari_proto_joints_controller_pb.GetProfileAccelerationResponse>;
    responseDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.GetProfileAccelerationResponse>;
}
interface IJointsControllerServiceService_ISetProfileVelocity extends grpc.MethodDefinition<akari_proto_joints_controller_pb.SetProfileVelocityRequest, google_protobuf_empty_pb.Empty> {
    path: "/akari_proto.JointsControllerService/SetProfileVelocity";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_joints_controller_pb.SetProfileVelocityRequest>;
    requestDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.SetProfileVelocityRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IJointsControllerServiceService_IGetProfileVelocity extends grpc.MethodDefinition<akari_proto_joints_controller_pb.JointSpecifier, akari_proto_joints_controller_pb.GetProfileVelocityResponse> {
    path: "/akari_proto.JointsControllerService/GetProfileVelocity";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_joints_controller_pb.JointSpecifier>;
    requestDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.JointSpecifier>;
    responseSerialize: grpc.serialize<akari_proto_joints_controller_pb.GetProfileVelocityResponse>;
    responseDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.GetProfileVelocityResponse>;
}
interface IJointsControllerServiceService_ISetGoalPosition extends grpc.MethodDefinition<akari_proto_joints_controller_pb.SetGoalPositionRequest, google_protobuf_empty_pb.Empty> {
    path: "/akari_proto.JointsControllerService/SetGoalPosition";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_joints_controller_pb.SetGoalPositionRequest>;
    requestDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.SetGoalPositionRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IJointsControllerServiceService_IGetPresentPosition extends grpc.MethodDefinition<akari_proto_joints_controller_pb.JointSpecifier, akari_proto_joints_controller_pb.GetPresentPositionResponse> {
    path: "/akari_proto.JointsControllerService/GetPresentPosition";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_joints_controller_pb.JointSpecifier>;
    requestDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.JointSpecifier>;
    responseSerialize: grpc.serialize<akari_proto_joints_controller_pb.GetPresentPositionResponse>;
    responseDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.GetPresentPositionResponse>;
}
interface IJointsControllerServiceService_IGetMovingState extends grpc.MethodDefinition<akari_proto_joints_controller_pb.JointSpecifier, akari_proto_joints_controller_pb.GetMovingStateResponse> {
    path: "/akari_proto.JointsControllerService/GetMovingState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_joints_controller_pb.JointSpecifier>;
    requestDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.JointSpecifier>;
    responseSerialize: grpc.serialize<akari_proto_joints_controller_pb.GetMovingStateResponse>;
    responseDeserialize: grpc.deserialize<akari_proto_joints_controller_pb.GetMovingStateResponse>;
}

export const JointsControllerServiceService: IJointsControllerServiceService;

export interface IJointsControllerServiceServer extends grpc.UntypedServiceImplementation {
    getPositionLimit: grpc.handleUnaryCall<akari_proto_joints_controller_pb.JointSpecifier, akari_proto_joints_controller_pb.GetPositionLimitResponse>;
    getJointNames: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, akari_proto_joints_controller_pb.GetJointNamesResponse>;
    getServoEnabled: grpc.handleUnaryCall<akari_proto_joints_controller_pb.JointSpecifier, akari_proto_joints_controller_pb.GetServoEnabledResponse>;
    setServoEnabled: grpc.handleUnaryCall<akari_proto_joints_controller_pb.SetServoEnabledRequest, google_protobuf_empty_pb.Empty>;
    setProfileAcceleration: grpc.handleUnaryCall<akari_proto_joints_controller_pb.SetProfileAccelerationRequest, google_protobuf_empty_pb.Empty>;
    getProfileAcceleration: grpc.handleUnaryCall<akari_proto_joints_controller_pb.JointSpecifier, akari_proto_joints_controller_pb.GetProfileAccelerationResponse>;
    setProfileVelocity: grpc.handleUnaryCall<akari_proto_joints_controller_pb.SetProfileVelocityRequest, google_protobuf_empty_pb.Empty>;
    getProfileVelocity: grpc.handleUnaryCall<akari_proto_joints_controller_pb.JointSpecifier, akari_proto_joints_controller_pb.GetProfileVelocityResponse>;
    setGoalPosition: grpc.handleUnaryCall<akari_proto_joints_controller_pb.SetGoalPositionRequest, google_protobuf_empty_pb.Empty>;
    getPresentPosition: grpc.handleUnaryCall<akari_proto_joints_controller_pb.JointSpecifier, akari_proto_joints_controller_pb.GetPresentPositionResponse>;
    getMovingState: grpc.handleUnaryCall<akari_proto_joints_controller_pb.JointSpecifier, akari_proto_joints_controller_pb.GetMovingStateResponse>;
}

export interface IJointsControllerServiceClient {
    getPositionLimit(request: akari_proto_joints_controller_pb.JointSpecifier, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetPositionLimitResponse) => void): grpc.ClientUnaryCall;
    getPositionLimit(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetPositionLimitResponse) => void): grpc.ClientUnaryCall;
    getPositionLimit(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetPositionLimitResponse) => void): grpc.ClientUnaryCall;
    getJointNames(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetJointNamesResponse) => void): grpc.ClientUnaryCall;
    getJointNames(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetJointNamesResponse) => void): grpc.ClientUnaryCall;
    getJointNames(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetJointNamesResponse) => void): grpc.ClientUnaryCall;
    getServoEnabled(request: akari_proto_joints_controller_pb.JointSpecifier, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetServoEnabledResponse) => void): grpc.ClientUnaryCall;
    getServoEnabled(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetServoEnabledResponse) => void): grpc.ClientUnaryCall;
    getServoEnabled(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetServoEnabledResponse) => void): grpc.ClientUnaryCall;
    setServoEnabled(request: akari_proto_joints_controller_pb.SetServoEnabledRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setServoEnabled(request: akari_proto_joints_controller_pb.SetServoEnabledRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setServoEnabled(request: akari_proto_joints_controller_pb.SetServoEnabledRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setProfileAcceleration(request: akari_proto_joints_controller_pb.SetProfileAccelerationRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setProfileAcceleration(request: akari_proto_joints_controller_pb.SetProfileAccelerationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setProfileAcceleration(request: akari_proto_joints_controller_pb.SetProfileAccelerationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getProfileAcceleration(request: akari_proto_joints_controller_pb.JointSpecifier, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetProfileAccelerationResponse) => void): grpc.ClientUnaryCall;
    getProfileAcceleration(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetProfileAccelerationResponse) => void): grpc.ClientUnaryCall;
    getProfileAcceleration(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetProfileAccelerationResponse) => void): grpc.ClientUnaryCall;
    setProfileVelocity(request: akari_proto_joints_controller_pb.SetProfileVelocityRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setProfileVelocity(request: akari_proto_joints_controller_pb.SetProfileVelocityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setProfileVelocity(request: akari_proto_joints_controller_pb.SetProfileVelocityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getProfileVelocity(request: akari_proto_joints_controller_pb.JointSpecifier, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetProfileVelocityResponse) => void): grpc.ClientUnaryCall;
    getProfileVelocity(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetProfileVelocityResponse) => void): grpc.ClientUnaryCall;
    getProfileVelocity(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetProfileVelocityResponse) => void): grpc.ClientUnaryCall;
    setGoalPosition(request: akari_proto_joints_controller_pb.SetGoalPositionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setGoalPosition(request: akari_proto_joints_controller_pb.SetGoalPositionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setGoalPosition(request: akari_proto_joints_controller_pb.SetGoalPositionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getPresentPosition(request: akari_proto_joints_controller_pb.JointSpecifier, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetPresentPositionResponse) => void): grpc.ClientUnaryCall;
    getPresentPosition(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetPresentPositionResponse) => void): grpc.ClientUnaryCall;
    getPresentPosition(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetPresentPositionResponse) => void): grpc.ClientUnaryCall;
    getMovingState(request: akari_proto_joints_controller_pb.JointSpecifier, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetMovingStateResponse) => void): grpc.ClientUnaryCall;
    getMovingState(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetMovingStateResponse) => void): grpc.ClientUnaryCall;
    getMovingState(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetMovingStateResponse) => void): grpc.ClientUnaryCall;
}

export class JointsControllerServiceClient extends grpc.Client implements IJointsControllerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getPositionLimit(request: akari_proto_joints_controller_pb.JointSpecifier, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetPositionLimitResponse) => void): grpc.ClientUnaryCall;
    public getPositionLimit(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetPositionLimitResponse) => void): grpc.ClientUnaryCall;
    public getPositionLimit(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetPositionLimitResponse) => void): grpc.ClientUnaryCall;
    public getJointNames(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetJointNamesResponse) => void): grpc.ClientUnaryCall;
    public getJointNames(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetJointNamesResponse) => void): grpc.ClientUnaryCall;
    public getJointNames(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetJointNamesResponse) => void): grpc.ClientUnaryCall;
    public getServoEnabled(request: akari_proto_joints_controller_pb.JointSpecifier, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetServoEnabledResponse) => void): grpc.ClientUnaryCall;
    public getServoEnabled(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetServoEnabledResponse) => void): grpc.ClientUnaryCall;
    public getServoEnabled(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetServoEnabledResponse) => void): grpc.ClientUnaryCall;
    public setServoEnabled(request: akari_proto_joints_controller_pb.SetServoEnabledRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setServoEnabled(request: akari_proto_joints_controller_pb.SetServoEnabledRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setServoEnabled(request: akari_proto_joints_controller_pb.SetServoEnabledRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setProfileAcceleration(request: akari_proto_joints_controller_pb.SetProfileAccelerationRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setProfileAcceleration(request: akari_proto_joints_controller_pb.SetProfileAccelerationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setProfileAcceleration(request: akari_proto_joints_controller_pb.SetProfileAccelerationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getProfileAcceleration(request: akari_proto_joints_controller_pb.JointSpecifier, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetProfileAccelerationResponse) => void): grpc.ClientUnaryCall;
    public getProfileAcceleration(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetProfileAccelerationResponse) => void): grpc.ClientUnaryCall;
    public getProfileAcceleration(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetProfileAccelerationResponse) => void): grpc.ClientUnaryCall;
    public setProfileVelocity(request: akari_proto_joints_controller_pb.SetProfileVelocityRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setProfileVelocity(request: akari_proto_joints_controller_pb.SetProfileVelocityRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setProfileVelocity(request: akari_proto_joints_controller_pb.SetProfileVelocityRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getProfileVelocity(request: akari_proto_joints_controller_pb.JointSpecifier, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetProfileVelocityResponse) => void): grpc.ClientUnaryCall;
    public getProfileVelocity(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetProfileVelocityResponse) => void): grpc.ClientUnaryCall;
    public getProfileVelocity(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetProfileVelocityResponse) => void): grpc.ClientUnaryCall;
    public setGoalPosition(request: akari_proto_joints_controller_pb.SetGoalPositionRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setGoalPosition(request: akari_proto_joints_controller_pb.SetGoalPositionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setGoalPosition(request: akari_proto_joints_controller_pb.SetGoalPositionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getPresentPosition(request: akari_proto_joints_controller_pb.JointSpecifier, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetPresentPositionResponse) => void): grpc.ClientUnaryCall;
    public getPresentPosition(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetPresentPositionResponse) => void): grpc.ClientUnaryCall;
    public getPresentPosition(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetPresentPositionResponse) => void): grpc.ClientUnaryCall;
    public getMovingState(request: akari_proto_joints_controller_pb.JointSpecifier, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetMovingStateResponse) => void): grpc.ClientUnaryCall;
    public getMovingState(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetMovingStateResponse) => void): grpc.ClientUnaryCall;
    public getMovingState(request: akari_proto_joints_controller_pb.JointSpecifier, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_joints_controller_pb.GetMovingStateResponse) => void): grpc.ClientUnaryCall;
}
