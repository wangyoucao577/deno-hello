import { Application, Router } from "$oak/mod.ts";
import { auth } from "./auth.ts";
import { authorized } from "./middleware/authorized.ts";

const router = new Router();
router
  .post("/auth", auth)
  .get("/", authorized, (context) => {
    context.response.body = "Hello world!";
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
