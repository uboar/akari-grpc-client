import { ChannelCredentials } from "@grpc/grpc-js";
import * as AkariJointClient from "./akari_proto/joints_controller_grpc_pb";
import * as AkariM5StackClient from "./akari_proto/m5stack_grpc_pb";
import { JointManager } from "./jointManager";
import { M5StackController } from "./m5stackClient";

export default class Akari {
  constructor(hostUrl?: string, credential?: ChannelCredentials);

  joints: JointManager;
  m5stack: M5StackController;
  getJointClient(): AkariJointClient.JointsControllerServiceClient;
  getM5Client(): AkariM5StackClient.M5StackServiceClient;
  close(): void;
}
