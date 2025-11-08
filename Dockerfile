FROM --platform=$BUILDPLATFORM imbios/bun-node:1.2.21-current-alpine AS base
WORKDIR /app
COPY . .
RUN bun install

FROM base AS build
ENV NODE_ENV=production
RUN bun -b run build

FROM oven/bun:alpine AS runtime
COPY --from=build /app/.output .output

ARG BRANCH
ENV NUXT_PUBLIC_BRANCH=${BRANCH}
ENV HOST=0.0.0.0
EXPOSE 3000/tcp
ENTRYPOINT [ "sh", "-c",  "export NUXT_PUBLIC_BUNVER=$(bun -v) && bun -b run .output/server/index.mjs" ]