FROM --platform=$BUILDPLATFORM node:lts-slim as base
WORKDIR /app

COPY . .
RUN npm i -g bun
RUN bun install

FROM base AS build
ENV NODE_ENV=production
RUN bun run build

FROM oven/bun:alpine AS runtime
COPY --from=build /app/.output .output
# COPY --from=build /app/node_modules node_modules

ARG BRANCH
ENV NUXT_PUBLIC_BRANCH=${BRANCH}
ENV HOST 0.0.0.0
EXPOSE 3000
ENTRYPOINT [ "bun", "run", ".output/server/index.mjs" ]