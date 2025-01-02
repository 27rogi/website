FROM --platform=$BUILDPLATFORM imbios/bun-node:latest-current-alpine as base
WORKDIR /app

COPY . .
RUN bun install

FROM base AS build
ENV NODE_ENV=production
RUN bun run build

FROM oven/bun:alpine AS runtime
COPY --from=build /app/.output .output
# COPY --from=build /app/node_modules node_modules

ARG BRANCH
ENV NUXT_PUBLIC_BRANCH=${BRANCH}
ENV HOST=0.0.0.0
EXPOSE 3000
ENTRYPOINT [ "bun", "run", ".output/server/index.mjs" ]