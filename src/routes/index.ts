import Router from "@koa/router";
import IndexController from "../controllers/index";
const router = new Router();

router.prefix("/");

router.get("/", IndexController.index);
router.get("/grpcTest", IndexController.grpcTest);
router.get("/configTest", IndexController.configTest);
router.get("/secretTest", IndexController.secretTest);

export default router;
