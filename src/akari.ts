import { JointManager } from "./jointManager";
import { M5StackController } from "./m5stackClient";
import * as AkariJointClient from "./akari_proto/joints_controller_grpc_pb";
import * as AkariM5StackClient from "./akari_proto/m5stack_grpc_pb";
import { ChannelCredentials } from "@grpc/grpc-js";

export class Akari {
  private readonly DEFAULT_HOST_URL = "localhost:51001";
  private jointClient: AkariJointClient.JointsControllerServiceClient;
  private m5Client: AkariM5StackClient.M5StackServiceClient;
  public joints: JointManager;
  public m5stack: M5StackController;

  constructor(hostUrl?: string, credential?: ChannelCredentials) {
    this.jointClient = new AkariJointClient.JointsControllerServiceClient(
      hostUrl || this.DEFAULT_HOST_URL,
      credential || ChannelCredentials.createInsecure()
    );
    this.m5Client = new AkariM5StackClient.M5StackServiceClient(
      hostUrl || this.DEFAULT_HOST_URL,
      credential || ChannelCredentials.createInsecure()
    );

    this.joints = new JointManager(this.jointClient);
    this.m5stack = new M5StackController(this.m5Client);
  }

  public getJointClient() {
    return this.jointClient;
  }
  public getM5Client() {
    return this.m5Client;
  }
  public close() {
    this.jointClient.close();
    this.m5Client.close();
  }
}
