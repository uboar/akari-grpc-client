import * as AkariM5StackClient from "./akari_proto/m5stack_grpc_pb";

export const Positions: Record<string, number>;
export type GPIO_PinId = number;
export type PWM_PinId = number;

import {
  Color,
  ResetPinOutRequest,
  SetDisplayColorRequest,
  SetDisplayImageRequest,
  SetDisplayTextRequest,
  SetPinOutRequest,
} from "./akari_proto/m5stack_pb";

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

export class M5StackController {
  constructor(client: AkariM5StackClient.M5StackServiceClient);

  public setDout(
    pinId: GPIO_PinId,
    value: boolean,
    sync?: boolean
  ): Promise<void>;
  public setPwmOut(
    pinid: PWM_PinId,
    value: number,
    sync?: boolean
  ): Promise<void>;
  setAllOut(req: SetM5AllOutRequest, sync?: boolean): Promise<void>;
  resetAllOut(sync?: boolean): Promise<void>;

  setDisplayColor(color: Color, sync?: boolean): Promise<void>;
  setDisplayText(req: SetM5DisplayTextRequest, sync?: boolean): Promise<void>;
  setDisplayImage(req: SetM5DisplayImageRequest, sync?: boolean): Promise<void>;

  resetM5(): Promise<void>;

  get<T = number, B = number>(): Promise<GetM5StatusResponse<T, B>>;
}
