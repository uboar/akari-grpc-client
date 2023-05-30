import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import * as AkariJointClient from "./akari_proto/joints_controller_grpc_pb";

import {
  GetPositionLimitResponse,
  JointSpecifier,
  SetProfileAccelerationRequest,
  GetProfileAccelerationResponse,
  GetProfileVelocityResponse,
  SetProfileVelocityRequest,
  SetGoalPositionRequest,
  GetPresentPositionResponse,
  SetServoEnabledRequest,
} from "./akari_proto/joints_controller_pb";

export type PanAndTilt<T = number> = {
  pan: T;
  tilt: T;
};

export class JointManager {
  private jointClient: AkariJointClient.JointsControllerServiceClient;
  private panJoint = new JointSpecifier().setJointName("pan");
  private tiltJoint = new JointSpecifier().setJointName("tilt");
  constructor(client: AkariJointClient.JointsControllerServiceClient) {
    this.jointClient = client;
  }

  public getJointNames(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      this.jointClient.getJointNames(new Empty(), (err, res) => {
        if (err) reject(err);
        resolve(res.getJointNamesList());
      });
    });
  }

  public getJointLimits(): Promise<
    PanAndTilt<GetPositionLimitResponse.AsObject>
  > {
    const pan = new Promise<GetPositionLimitResponse.AsObject>(
      (resolve, reject) => {
        this.jointClient.getPositionLimit(this.panJoint, (err, res) => {
          if (err) reject(err);
          resolve(res.toObject() as GetPositionLimitResponse.AsObject);
        });
      }
    );
    const tilt = new Promise<GetPositionLimitResponse.AsObject>(
      (resolve, reject) => {
        this.jointClient.getPositionLimit(this.tiltJoint, (err, res) => {
          if (err) reject(err);
          resolve(res.toObject() as GetPositionLimitResponse.AsObject);
        });
      }
    );

    return Promise.all([pan, tilt]).then(([panResult, tiltResult]) => {
      return { pan: panResult, tilt: tiltResult };
    });
  }

  public setJointAccelerations(req: PanAndTilt): Promise<void> {
    const promises = [] as Promise<void>[];

    if (req.pan !== undefined) {
      promises.push(
        new Promise<void>((resolve, reject) => {
          const request = new SetProfileAccelerationRequest()
            .setTargetJoint(this.panJoint)
            .setRadPerSec2(req.pan);
          this.jointClient.setProfileAcceleration(request, (err, res) => {
            if (err) reject(err);
            resolve();
          });
        })
      );
    }
    if (req.tilt !== undefined) {
      promises.push(
        new Promise<void>((resolve, reject) => {
          const request = new SetProfileAccelerationRequest()
            .setTargetJoint(this.tiltJoint)
            .setRadPerSec2(req.tilt);
          this.jointClient.setProfileAcceleration(request, (err, res) => {
            if (err) reject(err);
            resolve();
          });
        })
      );
    }

    return Promise.all(promises).then((val) => {});
  }

  public getJointAccelerations(): Promise<
    PanAndTilt<GetProfileAccelerationResponse.AsObject>
  > {
    return Promise.all([
      new Promise<GetProfileAccelerationResponse.AsObject>(
        (resolve, reject) => {
          this.jointClient.getProfileAcceleration(this.panJoint, (err, res) => {
            if (err) reject(err);
            resolve(res.toObject());
          });
        }
      ),
      new Promise<GetProfileAccelerationResponse.AsObject>(
        (resolve, reject) => {
          this.jointClient.getProfileAcceleration(
            this.tiltJoint,
            (err, res) => {
              if (err) reject(err);
              resolve(res.toObject());
            }
          );
        }
      ),
    ]).then(([panResult, tiltResult]) => {
      return {
        pan: panResult,
        tilt: tiltResult,
      };
    });
  }

  public setJointVelocites(req: PanAndTilt): Promise<void> {
    const promises = [] as Promise<void>[];

    if (req.pan !== undefined) {
      promises.push(
        new Promise<void>((resolve, reject) => {
          const request = new SetProfileVelocityRequest()
            .setTargetJoint(this.panJoint)
            .setRadPerSec(req.pan);
          this.jointClient.setProfileVelocity(request, (err, res) => {
            if (err) reject(err);
            resolve();
          });
        })
      );
    }
    if (req.tilt !== undefined) {
      promises.push(
        new Promise<void>((resolve, reject) => {
          const request = new SetProfileVelocityRequest()
            .setTargetJoint(this.tiltJoint)
            .setRadPerSec(req.tilt);
          this.jointClient.setProfileVelocity(request, (err, res) => {
            if (err) reject(err);
            resolve();
          });
        })
      );
    }

    return Promise.all(promises).then((val) => {});
  }

  public getJointVelocities(): Promise<
    PanAndTilt<GetProfileVelocityResponse.AsObject>
  > {
    return Promise.all([
      new Promise<GetProfileVelocityResponse.AsObject>((resolve, reject) => {
        this.jointClient.getProfileVelocity(this.panJoint, (err, res) => {
          if (err) reject(err);
          resolve(res.toObject());
        });
      }),
      new Promise<GetProfileVelocityResponse.AsObject>((resolve, reject) => {
        this.jointClient.getProfileVelocity(this.tiltJoint, (err, res) => {
          if (err) reject(err);
          resolve(res.toObject());
        });
      }),
    ]).then(([panResult, tiltResult]) => {
      return {
        pan: panResult,
        tilt: tiltResult,
      };
    });
  }
  public moveJointPositions(req: PanAndTilt): Promise<void> {
    let promises = [] as Promise<void>[];

    if (req.pan !== undefined) {
      promises.push(
        new Promise<void>((resolve, reject) => {
          const request = new SetGoalPositionRequest()
            .setTargetJoint(this.panJoint)
            .setRad(req.pan);
          this.jointClient.setGoalPosition(request, (err, res) => {
            if (err) reject(err);
            resolve();
          });
        })
      );
    }
    if (req.tilt !== undefined) {
      promises.push(
        new Promise<void>((resolve, reject) => {
          const request = new SetGoalPositionRequest()
            .setTargetJoint(this.tiltJoint)
            .setRad(req.tilt);
          this.jointClient.setGoalPosition(request, (err, res) => {
            if (err) reject(err);
            resolve();
          });
        })
      );
    }
    return Promise.all(promises).then((val) => {});
  }

  public getJointPositions(): Promise<
    PanAndTilt<GetPresentPositionResponse.AsObject>
  > {
    return Promise.all([
      new Promise<GetPresentPositionResponse.AsObject>((resolve, reject) => {
        this.jointClient.getPresentPosition(this.panJoint, (err, res) => {
          if (err) reject(err);
          resolve(res.toObject());
        });
      }),
      new Promise<GetPresentPositionResponse.AsObject>((resolve, reject) => {
        this.jointClient.getPresentPosition(this.tiltJoint, (err, res) => {
          if (err) reject(err);
          resolve(res.toObject());
        });
      }),
    ]).then(([panResult, tiltResult]) => {
      return {
        pan: panResult,
        tilt: tiltResult,
      };
    });
  }

  public setServoEnabled(req: PanAndTilt<boolean>): Promise<void> {
    let promises = [] as Promise<void>[];

    if (req.pan !== undefined) {
      promises.push(
        new Promise<void>((resolve, reject) => {
          const request = new SetServoEnabledRequest()
            .setTargetJoint(this.panJoint)
            .setEnabled(req.pan);
          this.jointClient.setServoEnabled(request, (err, res) => {
            if (err) reject(err);
            resolve();
          });
        })
      );
    }
    if (req.tilt !== undefined) {
      promises.push(
        new Promise<void>((resolve, reject) => {
          const request = new SetServoEnabledRequest()
            .setTargetJoint(this.tiltJoint)
            .setEnabled(req.tilt);
          this.jointClient.setServoEnabled(request, (err, res) => {
            if (err) reject(err);
            resolve();
          });
        })
      );
    }
    return Promise.all(promises).then((val) => {});
  }
  public enableAllServo(): Promise<void> {
    return this.setServoEnabled({ pan: true, tilt: true });
  }
  public disableAllServo(): Promise<void> {
    return this.setServoEnabled({ pan: false, tilt: false });
  }
}
