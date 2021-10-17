import { Context } from "koa";
import HelloService from "../services/hello";
import FSService from "../services/fs";

class IndexController {
  async index(ctx) {
    ctx.body = "this is index";
  }
  async grpcTest(ctx: Context) {
    const result = await HelloService.sayHello(ctx.query.name ?? "bob");
    ctx.body = result;
  }
  async configTest(ctx: Context) {
    const result = await FSService.getConfigMap();
    ctx.body = result;
  }
  async secretTest(ctx: Context) {
    const result = await FSService.getSecret();
    ctx.body = result;
  }
}

export default new IndexController();
