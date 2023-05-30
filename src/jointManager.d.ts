import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import * as AkariJointClient from "./akari_proto/joints_controller_grpc_pb";

import {
  GetPositionLimitResponse,
  GetProfileAccelerationResponse,
  GetProfileVelocityResponse,
  GetPresentPositionResponse,
} from "./akari_proto/joints_controller_pb";


export class JointManager {
  constructor(clinet: AkariJointClient.IJointsControllerServiceClient);

  getJointNames(): Promise<string[]>;
  getJointLimits(): Promise<PanAndTilt<GetPositionLimitResponse.AsObject>>;

  setJointAccelerations(req: PanAndTilt): Promise<void>;
  getJointAccelerations(): Promise<PanAndTilt<GetProfileAccelerationResponse.AsObject>>;

  setJointVelocites(req: PanAndTilt): Promise<void>;
  getJointVelocities(): Promise<PanAndTilt<GetProfileVelocityResponse.AsObject>>;

  moveJointPositions(req: PanAndTilt): Promise<void>;
  getJointPositions(): Promise<PanAndTilt<GetPresentPositionResponse.AsObject>>;

  setServoEnabled(req: PanAndTilt<boolean>): Promise<void>;
  enableAllServo(): Promise<void>;
  disableAllServo(): Promise<void>;
}

export type PanAndTilt<T = number> = {
  pan: T;
  tilt: T;
};