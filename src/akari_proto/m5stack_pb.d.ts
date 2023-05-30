// package: akari_proto
// file: akari_proto/m5stack.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class SetPinOutRequest extends jspb.Message { 

    getBinaryPinsMap(): jspb.Map<string, boolean>;
    clearBinaryPinsMap(): void;

    getIntPinsMap(): jspb.Map<string, number>;
    clearIntPinsMap(): void;
    getSync(): boolean;
    setSync(value: boolean): SetPinOutRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetPinOutRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetPinOutRequest): SetPinOutRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetPinOutRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetPinOutRequest;
    static deserializeBinaryFromReader(message: SetPinOutRequest, reader: jspb.BinaryReader): SetPinOutRequest;
}

export namespace SetPinOutRequest {
    export type AsObject = {

        binaryPinsMap: Array<[string, boolean]>,

        intPinsMap: Array<[string, number]>,
        sync: boolean,
    }
}

export class ResetPinOutRequest extends jspb.Message { 
    getSync(): boolean;
    setSync(value: boolean): ResetPinOutRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResetPinOutRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResetPinOutRequest): ResetPinOutRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResetPinOutRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResetPinOutRequest;
    static deserializeBinaryFromReader(message: ResetPinOutRequest, reader: jspb.BinaryReader): ResetPinOutRequest;
}

export namespace ResetPinOutRequest {
    export type AsObject = {
        sync: boolean,
    }
}

export class SetDisplayColorRequest extends jspb.Message { 

    hasColor(): boolean;
    clearColor(): void;
    getColor(): Color | undefined;
    setColor(value?: Color): SetDisplayColorRequest;
    getSync(): boolean;
    setSync(value: boolean): SetDisplayColorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDisplayColorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetDisplayColorRequest): SetDisplayColorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDisplayColorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDisplayColorRequest;
    static deserializeBinaryFromReader(message: SetDisplayColorRequest, reader: jspb.BinaryReader): SetDisplayColorRequest;
}

export namespace SetDisplayColorRequest {
    export type AsObject = {
        color?: Color.AsObject,
        sync: boolean,
    }
}

export class SetDisplayTextRequest extends jspb.Message { 
    getText(): string;
    setText(value: string): SetDisplayTextRequest;
    getPosX(): number;
    setPosX(value: number): SetDisplayTextRequest;
    getPosY(): number;
    setPosY(value: number): SetDisplayTextRequest;
    getSize(): number;
    setSize(value: number): SetDisplayTextRequest;

    hasTextColor(): boolean;
    clearTextColor(): void;
    getTextColor(): Color | undefined;
    setTextColor(value?: Color): SetDisplayTextRequest;

    hasBgColor(): boolean;
    clearBgColor(): void;
    getBgColor(): Color | undefined;
    setBgColor(value?: Color): SetDisplayTextRequest;
    getRefresh(): boolean;
    setRefresh(value: boolean): SetDisplayTextRequest;
    getSync(): boolean;
    setSync(value: boolean): SetDisplayTextRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDisplayTextRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetDisplayTextRequest): SetDisplayTextRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDisplayTextRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDisplayTextRequest;
    static deserializeBinaryFromReader(message: SetDisplayTextRequest, reader: jspb.BinaryReader): SetDisplayTextRequest;
}

export namespace SetDisplayTextRequest {
    export type AsObject = {
        text: string,
        posX: number,
        posY: number,
        size: number,
        textColor?: Color.AsObject,
        bgColor?: Color.AsObject,
        refresh: boolean,
        sync: boolean,
    }
}

export class SetDisplayImageRequest extends jspb.Message { 
    getPath(): string;
    setPath(value: string): SetDisplayImageRequest;
    getPosX(): number;
    setPosX(value: number): SetDisplayImageRequest;
    getPosY(): number;
    setPosY(value: number): SetDisplayImageRequest;
    getScale(): number;
    setScale(value: number): SetDisplayImageRequest;
    getSync(): boolean;
    setSync(value: boolean): SetDisplayImageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDisplayImageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetDisplayImageRequest): SetDisplayImageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDisplayImageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDisplayImageRequest;
    static deserializeBinaryFromReader(message: SetDisplayImageRequest, reader: jspb.BinaryReader): SetDisplayImageRequest;
}

export namespace SetDisplayImageRequest {
    export type AsObject = {
        path: string,
        posX: number,
        posY: number,
        scale: number,
        sync: boolean,
    }
}

export class Color extends jspb.Message { 
    getRed(): number;
    setRed(value: number): Color;
    getGreen(): number;
    setGreen(value: number): Color;
    getBlue(): number;
    setBlue(value: number): Color;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Color.AsObject;
    static toObject(includeInstance: boolean, msg: Color): Color.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Color, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Color;
    static deserializeBinaryFromReader(message: Color, reader: jspb.BinaryReader): Color;
}

export namespace Color {
    export type AsObject = {
        red: number,
        green: number,
        blue: number,
    }
}

export class M5StackStatus extends jspb.Message { 
    getStatusJson(): string;
    setStatusJson(value: string): M5StackStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): M5StackStatus.AsObject;
    static toObject(includeInstance: boolean, msg: M5StackStatus): M5StackStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: M5StackStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): M5StackStatus;
    static deserializeBinaryFromReader(message: M5StackStatus, reader: jspb.BinaryReader): M5StackStatus;
}

export namespace M5StackStatus {
    export type AsObject = {
        statusJson: string,
    }
}
