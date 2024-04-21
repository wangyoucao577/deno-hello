# deno-hello

Hello world via deno deploy, with JWT authorization enabled!

## Run and deploy

### Local run

```bash
deno run -A main.ts
```

### Deno Deploy

1. deploy to [Deno Deploy](https://docs.deno.com/deploy/manual) by `deployctl`

```bash
deployctl deploy -p deno-hello-1
```

2. Promote latest deployment to production on [Deno Dashboard](dash.deno.com)

## Test

```bash
# Unauthorized
$ curl https://${YOUR_DEPLOYMENT_DOMAIN}/
Unauthorized

# Auth to get token
$ curl -X POST -H "Content-Type: application/json" -d '{"username":YOUR_USERNAME,"password":YOUR_PASSWORD}' https://${YOUR_DEPLOYMENT_DOMAIN}/auth/
{"access_token":YOUR_TOKEN}

# Get with token
$ curl -H "Authorization: Bearer YOUR_TOKEN" https://deno-hello-1.deno.dev/
Hello world!
```

## References

- [Deno Docs](https://docs.deno.com/)
- [Deno API Authentication With JWT Tutorial. Build a Deno API Authentication With JWT Example](https://www.youtube.com/watch?v=L5Zoew-lD54&list=PL_tfpuj34wCUhqvI1vqIBkjwilcEEoqgM&index=4&t=316s)
