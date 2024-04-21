import { RouterContext } from "$oak/mod.ts";
import { getNumericDate } from "$djwt/mod.ts";
import { createToken } from "./jwt.ts";
// import "$std/dotenv/load.ts";

export async function auth(ctx: RouterContext) {
  if (!ctx.request.hasBody) {
    ctx.throw(400, "Bad Request: no body");
  }

  const { username, password } = await ctx.request.body.json();
  if (!username || !password) {
    ctx.throw(400, "Bad Request: no username or password");
  }

  // TODO: check username and password from database

  const respBody = {
    access_token: await createToken(getPayload(username)),
  };

  ctx.response.body = respBody;
  ctx.response.status = 200;
}

function getPayload(username: string) {
  return {
    username,
    role: "admin",
    exp: getNumericDate(60), // 1 minute expiration by default
  };
}
