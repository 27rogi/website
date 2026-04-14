FROM --platform=$BUILDPLATFORM oven/bun:alpine AS base
WORKDIR /app
COPY . .
# looks like now image can be built without nodejs, keeping commented just in case
# RUN apk install --update nodejs npm
RUN bun install

FROM base AS build
ARG BRANCH
ENV NUXT_PUBLIC_BRANCH=${BRANCH}
ENV NODE_ENV=production
RUN --mount=type=secret,id=gh_token \
    NUXT_GH_API_TOKEN="$(cat /run/secrets/gh_token)" bun run -b build

FROM oven/bun:alpine AS runtime
COPY --from=build /app/.output .output
ARG BRANCH
ENV NUXT_PUBLIC_BRANCH=${BRANCH}
ENV HOST=0.0.0.0
EXPOSE 3000/tcp
ENTRYPOINT [ "sh", "-c",  "export NUXT_PUBLIC_BUNVER=$(bun -v) && bun -b run .output/server/index.mjs" ]