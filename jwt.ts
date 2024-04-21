import { create, verify } from "$djwt/mod.ts";

// local var to remember generated key
const key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
);
//   crypto.subtle.exportKey("jwk", key).then((keydata) => {
//     console.log(keydata);
//   });

export function verfiyToken(jwt: string) {
  return verify(jwt, key);
}

export function createToken(payload: any): Promise<string> {
  return create({ alg: "HS512", typ: "JWT" }, payload, key);
}
