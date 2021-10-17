import Koa from "koa";
import onerror from "koa-onerror";
import bodyParser from "koa-bodyparser";
import routes from "./routes";
import koaLogger from "koa-logger";

const app = new Koa();
onerror(app);

app.use(koaLogger());
app.use(bodyParser());

app.use(routes.routes());
// app.use(routes.allowedMethods());

app.on("error", (err) => console.error(err));
export default app;
