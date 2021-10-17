import * as grpc from "@grpc/grpc-js";
import { GreeterClient } from "../../lib/hello_grpc_pb";
import config from "./config";

export * as Models from "../../lib/hello_pb";

export const client = new GreeterClient(
  config["grpc.hello"].url,
  grpc.credentials.createInsecure()
);

export default client;

