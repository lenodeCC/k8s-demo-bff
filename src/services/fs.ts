import fs from "fs";

class FSService {
  async getSecret() {
    return await fs.promises.readFile("./secret", { encoding: "utf-8" });
  }
  async getConfigMap() {
    return await fs.promises.readFile("./configMap", { encoding: "utf-8" });
  }
}

export default new FSService();
