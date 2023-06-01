# akari-grpc-client

[akari_client](https://akarigroup.github.io/docs/source/sdk_reference/akari_client.html)の Node.js 移植

## 使い方

### インストール

```bash
npm i akari-grpc-client
```

### Servo Example
```ts
import { AkariGrpcClient } from "akari-grpc-client";

const akari = new AkariGrpcClient();

await akari.joints.enableAllServo();
await akari.joints.moveJointPositions({ pan: 0.5, tilt: 0.3 });
await new Promise<void>((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});
console.log(await akari.joints.getJointPositions());
```

### M5Stack Example
```ts
import { AkariGrpcClient } from "akari-grpc-client";
import m5stack from "akari-grpc-client/dist/akari_proto/m5stack_pb.js";

const akari = new AkariGrpcClient();
await akari.m5stack.setDisplayColor(
  new m5stack.Color().setRed(0).setGreen(0).setRed(0)
);
await akari.m5stack.setDisplayText({
  text: "abcde",
  textColor: new m5stack.Color().setRed(255).setGreen(255).setBlue(255),
  size: 5,
});
console.log(await akari.m5stack.get());
```

## protoc の生成

```bash
grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:. \
--grpc_out=grpc_js:. \
--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
 ./akari_proto/*.proto

protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:. \
 ./akari_proto/*.proto
```
