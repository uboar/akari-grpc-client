import * as AkariM5StackClient from "./akari_proto/m5stack_grpc_pb";
import {
  Color,
  ResetPinOutRequest,
  SetDisplayColorRequest,
  SetDisplayImageRequest,
  SetDisplayTextRequest,
  SetPinOutRequest,
} from "./akari_proto/m5stack_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";



export type SetM5DisplayTextRequest = {
  text: string;
  posX?: number;
  posY?: number;
  size?: number;
  textColor?: Color;
  backColor?: Color;
  refresh?: boolean;
};

export type SetM5DisplayImageRequest = {
  filePath: string;
  posX?: number;
  posY?: number;
  scale?: number;
};

export type SetM5AllOutRequest = {
  dout0?: boolean;
  dout1?: boolean;
  pwmout0?: number;
};

export type GetM5StatusResponse<T = number, B = number> = {
  din0: boolean;
  din1: boolean;
  ain0: number;
  dout0: boolean;
  dout1: boolean;
  pwmout0: boolean;
  general0: T;
  general1: B;
  button_a: boolean;
  button_b: boolean;
  button_c: boolean;
  temperature: number;
  pressure: number;
  brightness: number;
  is_response: boolean;
  time: number;
};

const GPIO_PinId = {
  dout0: 0,
  dout1: 1,
} as const;

const GPIO_PinName = ["dout0", "dout1"] as const;

const PWM_PinId = {
  pwmout0: 0,
} as const;

const PWM_PinName = ["pwmout0"] as const;

export const Positions = {
  CENTER: -999,
  LEFT: 0,
  TOP: 0,
  RIGHT: 999,
  BOTTOM: 999,
} as const;

export type GPIO_PinId = (typeof GPIO_PinId)[keyof typeof GPIO_PinId];
export type PWM_PinId = (typeof PWM_PinId)[keyof typeof PWM_PinId];

export class M5StackController {
  private m5Client: AkariM5StackClient.M5StackServiceClient;
  constructor(client: AkariM5StackClient.M5StackServiceClient) {
    this.m5Client = client;
  }

  public setDout(
    pinId: GPIO_PinId,
    value: boolean,
    sync?: boolean
  ): Promise<void> {
    const request = new SetPinOutRequest().setSync(
      sync === undefined ? true : sync
    );
    request.getBinaryPinsMap().set(GPIO_PinName[pinId], value);
    return new Promise<void>((resolve, reject) => {
      this.m5Client.setPinOut(request, (err, res) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  public setPwmOut(
    pinid: PWM_PinId,
    value: number,
    sync?: boolean
  ): Promise<void> {
    value = Math.round(value);
    if (value < 0) value = 0;
    if (value > 255) value = 255;
    const request = new SetPinOutRequest().setSync(
      sync === undefined ? true : sync
    );
    request.getIntPinsMap().set(PWM_PinName[pinid], value);

    return new Promise<void>((resolve, reject) => {
      this.m5Client.setPinOut(request, (err, res) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  public setAllOut(req: SetM5AllOutRequest, sync?: boolean): Promise<void> {
    const request = new SetPinOutRequest().setSync(
      sync === undefined ? true : sync
    );
    if (req.dout0 !== undefined)
      request.getBinaryPinsMap().set(GPIO_PinName[0], req.dout0);
    if (req.dout1 !== undefined)
      request.getBinaryPinsMap().set(GPIO_PinName[1], req.dout1);
    if (req.pwmout0 !== undefined) {
      req.pwmout0 = Math.round(req.pwmout0);
      if (req.pwmout0 < 0) req.pwmout0 = 0;
      if (req.pwmout0 > 255) req.pwmout0 = 255;
      request.getIntPinsMap().set(PWM_PinName[0], req.pwmout0);
    }

    return new Promise<void>((resolve, reject) => {
      this.m5Client.setPinOut(request, (err, res) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  public resetAllOut(sync?: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      this.m5Client.resetPinOut(
        new ResetPinOutRequest().setSync(sync === undefined ? true : sync),
        (err, res) => {
          if (err) reject(err);
          resolve();
        }
      );
    });
  }

  public setDisplayColor(color: Color, sync?: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = new SetDisplayColorRequest()
        .setSync(sync === undefined ? true : sync)
        .setColor(color);
      this.m5Client.setDisplayColor(request, (err, res) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  public setDisplayText(
    req: SetM5DisplayTextRequest,
    sync?: boolean
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      if (req.size !== undefined) {
        req.size = Math.round(req.size);
        if (req.size > 11) req.size = 11;
        if (req.size < 0) req.size = 0;
      } else {
        req.size = 5;
      }

      let request = new SetDisplayTextRequest()
        .setSync(sync === undefined ? true : sync)
        .setText(req.text)
        .setPosX(req.posX === undefined ? Positions.CENTER : req.posX)
        .setPosY(req.posY === undefined ? Positions.CENTER : req.posY)
        .setRefresh(req.refresh === undefined ? true : req.refresh)
        .setSize(req.size);

      if (req.textColor !== undefined)
        request = request.setTextColor(req.textColor);
      if (req.backColor !== undefined)
        request = request.setBgColor(req.backColor);

      this.m5Client.setDisplayText(request, (err, res) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  public setDisplayImage(
    req: SetM5DisplayImageRequest,
    sync?: boolean
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const request = new SetDisplayImageRequest()
        .setSync(sync === undefined ? true : sync)
        .setPath(req.filePath)
        .setPosX(req.posX === undefined ? Positions.CENTER : req.posX)
        .setPosY(req.posY === undefined ? Positions.CENTER : req.posY)
        .setScale(req.scale === undefined ? -1.0 : req.scale);

      this.m5Client.setDisplayImage(request, (err, res) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  public resetM5(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.m5Client.reset(new Empty(), (err, res) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  public get<T = number, B = number>(): Promise<GetM5StatusResponse<T, B>> {
    return new Promise<GetM5StatusResponse<T, B>>((resolve, reject) => {
      this.m5Client.get(new Empty(), (err, res) => {
        if (err) reject(err);
        resolve(JSON.parse(res.getStatusJson()) as GetM5StatusResponse<T, B>);
      });
    });
  }
}
