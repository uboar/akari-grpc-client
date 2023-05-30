// package: akari_proto
// file: akari_proto/m5stack.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as akari_proto_m5stack_pb from "./m5stack_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IM5StackServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    setPinOut: IM5StackServiceService_ISetPinOut;
    resetPinOut: IM5StackServiceService_IResetPinOut;
    setDisplayColor: IM5StackServiceService_ISetDisplayColor;
    setDisplayText: IM5StackServiceService_ISetDisplayText;
    setDisplayImage: IM5StackServiceService_ISetDisplayImage;
    reset: IM5StackServiceService_IReset;
    get: IM5StackServiceService_IGet;
    getStream: IM5StackServiceService_IGetStream;
}

interface IM5StackServiceService_ISetPinOut extends grpc.MethodDefinition<akari_proto_m5stack_pb.SetPinOutRequest, google_protobuf_empty_pb.Empty> {
    path: "/akari_proto.M5StackService/SetPinOut";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_m5stack_pb.SetPinOutRequest>;
    requestDeserialize: grpc.deserialize<akari_proto_m5stack_pb.SetPinOutRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IM5StackServiceService_IResetPinOut extends grpc.MethodDefinition<akari_proto_m5stack_pb.ResetPinOutRequest, google_protobuf_empty_pb.Empty> {
    path: "/akari_proto.M5StackService/ResetPinOut";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_m5stack_pb.ResetPinOutRequest>;
    requestDeserialize: grpc.deserialize<akari_proto_m5stack_pb.ResetPinOutRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IM5StackServiceService_ISetDisplayColor extends grpc.MethodDefinition<akari_proto_m5stack_pb.SetDisplayColorRequest, google_protobuf_empty_pb.Empty> {
    path: "/akari_proto.M5StackService/SetDisplayColor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_m5stack_pb.SetDisplayColorRequest>;
    requestDeserialize: grpc.deserialize<akari_proto_m5stack_pb.SetDisplayColorRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IM5StackServiceService_ISetDisplayText extends grpc.MethodDefinition<akari_proto_m5stack_pb.SetDisplayTextRequest, google_protobuf_empty_pb.Empty> {
    path: "/akari_proto.M5StackService/SetDisplayText";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_m5stack_pb.SetDisplayTextRequest>;
    requestDeserialize: grpc.deserialize<akari_proto_m5stack_pb.SetDisplayTextRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IM5StackServiceService_ISetDisplayImage extends grpc.MethodDefinition<akari_proto_m5stack_pb.SetDisplayImageRequest, google_protobuf_empty_pb.Empty> {
    path: "/akari_proto.M5StackService/SetDisplayImage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<akari_proto_m5stack_pb.SetDisplayImageRequest>;
    requestDeserialize: grpc.deserialize<akari_proto_m5stack_pb.SetDisplayImageRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IM5StackServiceService_IReset extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty> {
    path: "/akari_proto.M5StackService/Reset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IM5StackServiceService_IGet extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, akari_proto_m5stack_pb.M5StackStatus> {
    path: "/akari_proto.M5StackService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<akari_proto_m5stack_pb.M5StackStatus>;
    responseDeserialize: grpc.deserialize<akari_proto_m5stack_pb.M5StackStatus>;
}
interface IM5StackServiceService_IGetStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, akari_proto_m5stack_pb.M5StackStatus> {
    path: "/akari_proto.M5StackService/GetStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<akari_proto_m5stack_pb.M5StackStatus>;
    responseDeserialize: grpc.deserialize<akari_proto_m5stack_pb.M5StackStatus>;
}

export const M5StackServiceService: IM5StackServiceService;

export interface IM5StackServiceServer extends grpc.UntypedServiceImplementation {
    setPinOut: grpc.handleUnaryCall<akari_proto_m5stack_pb.SetPinOutRequest, google_protobuf_empty_pb.Empty>;
    resetPinOut: grpc.handleUnaryCall<akari_proto_m5stack_pb.ResetPinOutRequest, google_protobuf_empty_pb.Empty>;
    setDisplayColor: grpc.handleUnaryCall<akari_proto_m5stack_pb.SetDisplayColorRequest, google_protobuf_empty_pb.Empty>;
    setDisplayText: grpc.handleUnaryCall<akari_proto_m5stack_pb.SetDisplayTextRequest, google_protobuf_empty_pb.Empty>;
    setDisplayImage: grpc.handleUnaryCall<akari_proto_m5stack_pb.SetDisplayImageRequest, google_protobuf_empty_pb.Empty>;
    reset: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
    get: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, akari_proto_m5stack_pb.M5StackStatus>;
    getStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, akari_proto_m5stack_pb.M5StackStatus>;
}

export interface IM5StackServiceClient {
    setPinOut(request: akari_proto_m5stack_pb.SetPinOutRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setPinOut(request: akari_proto_m5stack_pb.SetPinOutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setPinOut(request: akari_proto_m5stack_pb.SetPinOutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    resetPinOut(request: akari_proto_m5stack_pb.ResetPinOutRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    resetPinOut(request: akari_proto_m5stack_pb.ResetPinOutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    resetPinOut(request: akari_proto_m5stack_pb.ResetPinOutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setDisplayColor(request: akari_proto_m5stack_pb.SetDisplayColorRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setDisplayColor(request: akari_proto_m5stack_pb.SetDisplayColorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setDisplayColor(request: akari_proto_m5stack_pb.SetDisplayColorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setDisplayText(request: akari_proto_m5stack_pb.SetDisplayTextRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setDisplayText(request: akari_proto_m5stack_pb.SetDisplayTextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setDisplayText(request: akari_proto_m5stack_pb.SetDisplayTextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setDisplayImage(request: akari_proto_m5stack_pb.SetDisplayImageRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setDisplayImage(request: akari_proto_m5stack_pb.SetDisplayImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    setDisplayImage(request: akari_proto_m5stack_pb.SetDisplayImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reset(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reset(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    reset(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    get(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: akari_proto_m5stack_pb.M5StackStatus) => void): grpc.ClientUnaryCall;
    get(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_m5stack_pb.M5StackStatus) => void): grpc.ClientUnaryCall;
    get(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_m5stack_pb.M5StackStatus) => void): grpc.ClientUnaryCall;
    getStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<akari_proto_m5stack_pb.M5StackStatus>;
    getStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<akari_proto_m5stack_pb.M5StackStatus>;
}

export class M5StackServiceClient extends grpc.Client implements IM5StackServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public setPinOut(request: akari_proto_m5stack_pb.SetPinOutRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setPinOut(request: akari_proto_m5stack_pb.SetPinOutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setPinOut(request: akari_proto_m5stack_pb.SetPinOutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public resetPinOut(request: akari_proto_m5stack_pb.ResetPinOutRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public resetPinOut(request: akari_proto_m5stack_pb.ResetPinOutRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public resetPinOut(request: akari_proto_m5stack_pb.ResetPinOutRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setDisplayColor(request: akari_proto_m5stack_pb.SetDisplayColorRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setDisplayColor(request: akari_proto_m5stack_pb.SetDisplayColorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setDisplayColor(request: akari_proto_m5stack_pb.SetDisplayColorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setDisplayText(request: akari_proto_m5stack_pb.SetDisplayTextRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setDisplayText(request: akari_proto_m5stack_pb.SetDisplayTextRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setDisplayText(request: akari_proto_m5stack_pb.SetDisplayTextRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setDisplayImage(request: akari_proto_m5stack_pb.SetDisplayImageRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setDisplayImage(request: akari_proto_m5stack_pb.SetDisplayImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public setDisplayImage(request: akari_proto_m5stack_pb.SetDisplayImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reset(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reset(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public reset(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public get(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: akari_proto_m5stack_pb.M5StackStatus) => void): grpc.ClientUnaryCall;
    public get(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: akari_proto_m5stack_pb.M5StackStatus) => void): grpc.ClientUnaryCall;
    public get(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: akari_proto_m5stack_pb.M5StackStatus) => void): grpc.ClientUnaryCall;
    public getStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<akari_proto_m5stack_pb.M5StackStatus>;
    public getStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<akari_proto_m5stack_pb.M5StackStatus>;
}
