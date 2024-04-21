import { Context } from "$oak/mod.ts";
import { verfiyToken } from "../jwt.ts";

// authorized middleware
export async function authorized(ctx: Context, next: any) {
  try {
    const jwt = getToken(ctx.request.headers);
    if (!jwt) {
      throw new Error("!jwt");
    }

    const payload = await verfiyToken(jwt);
    if (!payload) {
      throw new Error("!payload");
    }
    // console.log(payload); // JWT payload

    await next();
  } catch (error) {
    console.log(error);
    ctx.throw(401, "Unauthorized");
  }
}

function getToken(headers: Headers) {
  // Bearer xxxxx
  const authorization = headers.get("Authorization");
  if (!authorization) {
    return null;
  }

  const [method, token] = authorization.split(" ");
  if (method !== "Bearer") {
    return null;
  }

  if (!token) {
    return null;
  }

  return token;
}
