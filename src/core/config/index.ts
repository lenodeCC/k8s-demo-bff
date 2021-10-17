import fs from "fs";

const defaultConf = {
  "grpc.hello": {
    url: "helloSvc:50051",
  },
};

let realConf = { ...defaultConf };

const userConfigPath = process.env.USER_CONFIG ?? "./config.json";
if (fs.existsSync(userConfigPath)) {
  const userConf = JSON.parse(
    fs.readFileSync(userConfigPath, { encoding: "utf-8" })
  );
  Object.assign(realConf, userConf);
}

export default realConf;
