// package: akari_proto
// file: akari_proto/joints_controller.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class JointSpecifier extends jspb.Message { 
    getJointName(): string;
    setJointName(value: string): JointSpecifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JointSpecifier.AsObject;
    static toObject(includeInstance: boolean, msg: JointSpecifier): JointSpecifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JointSpecifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JointSpecifier;
    static deserializeBinaryFromReader(message: JointSpecifier, reader: jspb.BinaryReader): JointSpecifier;
}

export namespace JointSpecifier {
    export type AsObject = {
        jointName: string,
    }
}

export class GetPositionLimitResponse extends jspb.Message { 
    getMin(): number;
    setMin(value: number): GetPositionLimitResponse;
    getMax(): number;
    setMax(value: number): GetPositionLimitResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPositionLimitResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPositionLimitResponse): GetPositionLimitResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPositionLimitResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPositionLimitResponse;
    static deserializeBinaryFromReader(message: GetPositionLimitResponse, reader: jspb.BinaryReader): GetPositionLimitResponse;
}

export namespace GetPositionLimitResponse {
    export type AsObject = {
        min: number,
        max: number,
    }
}

export class GetJointNamesResponse extends jspb.Message { 
    clearJointNamesList(): void;
    getJointNamesList(): Array<string>;
    setJointNamesList(value: Array<string>): GetJointNamesResponse;
    addJointNames(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetJointNamesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetJointNamesResponse): GetJointNamesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetJointNamesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetJointNamesResponse;
    static deserializeBinaryFromReader(message: GetJointNamesResponse, reader: jspb.BinaryReader): GetJointNamesResponse;
}

export namespace GetJointNamesResponse {
    export type AsObject = {
        jointNamesList: Array<string>,
    }
}

export class GetServoEnabledResponse extends jspb.Message { 
    getEnabled(): boolean;
    setEnabled(value: boolean): GetServoEnabledResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetServoEnabledResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetServoEnabledResponse): GetServoEnabledResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetServoEnabledResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetServoEnabledResponse;
    static deserializeBinaryFromReader(message: GetServoEnabledResponse, reader: jspb.BinaryReader): GetServoEnabledResponse;
}

export namespace GetServoEnabledResponse {
    export type AsObject = {
        enabled: boolean,
    }
}

export class SetServoEnabledRequest extends jspb.Message { 

    hasTargetJoint(): boolean;
    clearTargetJoint(): void;
    getTargetJoint(): JointSpecifier | undefined;
    setTargetJoint(value?: JointSpecifier): SetServoEnabledRequest;
    getEnabled(): boolean;
    setEnabled(value: boolean): SetServoEnabledRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetServoEnabledRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetServoEnabledRequest): SetServoEnabledRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetServoEnabledRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetServoEnabledRequest;
    static deserializeBinaryFromReader(message: SetServoEnabledRequest, reader: jspb.BinaryReader): SetServoEnabledRequest;
}

export namespace SetServoEnabledRequest {
    export type AsObject = {
        targetJoint?: JointSpecifier.AsObject,
        enabled: boolean,
    }
}

export class SetProfileAccelerationRequest extends jspb.Message { 

    hasTargetJoint(): boolean;
    clearTargetJoint(): void;
    getTargetJoint(): JointSpecifier | undefined;
    setTargetJoint(value?: JointSpecifier): SetProfileAccelerationRequest;
    getRadPerSec2(): number;
    setRadPerSec2(value: number): SetProfileAccelerationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetProfileAccelerationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetProfileAccelerationRequest): SetProfileAccelerationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetProfileAccelerationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetProfileAccelerationRequest;
    static deserializeBinaryFromReader(message: SetProfileAccelerationRequest, reader: jspb.BinaryReader): SetProfileAccelerationRequest;
}

export namespace SetProfileAccelerationRequest {
    export type AsObject = {
        targetJoint?: JointSpecifier.AsObject,
        radPerSec2: number,
    }
}

export class GetProfileAccelerationResponse extends jspb.Message { 
    getRadPerSec2(): number;
    setRadPerSec2(value: number): GetProfileAccelerationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProfileAccelerationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProfileAccelerationResponse): GetProfileAccelerationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProfileAccelerationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProfileAccelerationResponse;
    static deserializeBinaryFromReader(message: GetProfileAccelerationResponse, reader: jspb.BinaryReader): GetProfileAccelerationResponse;
}

export namespace GetProfileAccelerationResponse {
    export type AsObject = {
        radPerSec2: number,
    }
}

export class SetProfileVelocityRequest extends jspb.Message { 

    hasTargetJoint(): boolean;
    clearTargetJoint(): void;
    getTargetJoint(): JointSpecifier | undefined;
    setTargetJoint(value?: JointSpecifier): SetProfileVelocityRequest;
    getRadPerSec(): number;
    setRadPerSec(value: number): SetProfileVelocityRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetProfileVelocityRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetProfileVelocityRequest): SetProfileVelocityRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetProfileVelocityRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetProfileVelocityRequest;
    static deserializeBinaryFromReader(message: SetProfileVelocityRequest, reader: jspb.BinaryReader): SetProfileVelocityRequest;
}

export namespace SetProfileVelocityRequest {
    export type AsObject = {
        targetJoint?: JointSpecifier.AsObject,
        radPerSec: number,
    }
}

export class GetProfileVelocityResponse extends jspb.Message { 
    getRadPerSec(): number;
    setRadPerSec(value: number): GetProfileVelocityResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProfileVelocityResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProfileVelocityResponse): GetProfileVelocityResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProfileVelocityResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProfileVelocityResponse;
    static deserializeBinaryFromReader(message: GetProfileVelocityResponse, reader: jspb.BinaryReader): GetProfileVelocityResponse;
}

export namespace GetProfileVelocityResponse {
    export type AsObject = {
        radPerSec: number,
    }
}

export class SetGoalPositionRequest extends jspb.Message { 

    hasTargetJoint(): boolean;
    clearTargetJoint(): void;
    getTargetJoint(): JointSpecifier | undefined;
    setTargetJoint(value?: JointSpecifier): SetGoalPositionRequest;
    getRad(): number;
    setRad(value: number): SetGoalPositionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetGoalPositionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetGoalPositionRequest): SetGoalPositionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetGoalPositionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetGoalPositionRequest;
    static deserializeBinaryFromReader(message: SetGoalPositionRequest, reader: jspb.BinaryReader): SetGoalPositionRequest;
}

export namespace SetGoalPositionRequest {
    export type AsObject = {
        targetJoint?: JointSpecifier.AsObject,
        rad: number,
    }
}

export class GetPresentPositionResponse extends jspb.Message { 
    getRad(): number;
    setRad(value: number): GetPresentPositionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetPresentPositionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetPresentPositionResponse): GetPresentPositionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetPresentPositionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetPresentPositionResponse;
    static deserializeBinaryFromReader(message: GetPresentPositionResponse, reader: jspb.BinaryReader): GetPresentPositionResponse;
}

export namespace GetPresentPositionResponse {
    export type AsObject = {
        rad: number,
    }
}

export class GetMovingStateResponse extends jspb.Message { 
    getMoving(): boolean;
    setMoving(value: boolean): GetMovingStateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMovingStateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMovingStateResponse): GetMovingStateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMovingStateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMovingStateResponse;
    static deserializeBinaryFromReader(message: GetMovingStateResponse, reader: jspb.BinaryReader): GetMovingStateResponse;
}

export namespace GetMovingStateResponse {
    export type AsObject = {
        moving: boolean,
    }
}
