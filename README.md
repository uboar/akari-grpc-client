# akari-client

[akari_client](https://akarigroup.github.io/docs/source/sdk_reference/akari_client.html)の Node.js 移植

## 使い方

### インストール

```bash
npm i akari-client
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
