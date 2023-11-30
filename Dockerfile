FROM gplane/pnpm:8-node20-alpine as build

WORKDIR /home/rogisu
COPY ./ /home/rogisu

RUN node -v

RUN pnpm install
RUN pnpm run build

RUN rm -rf node_modules

FROM node:lts-alpine as runnable

ARG BRANCH
ENV NUXT_PUBLIC_BRANCH=${BRANCH}

WORKDIR /home/rogisu

COPY --from=build /home/rogisu/.output ./

ENV HOST 0.0.0.0
HEALTHCHECK --interval=30s --timeout=20s --start-period=60s CMD wget --no-verbose --tries=3 --spider http://localhost:3000/ || exit 1
EXPOSE 3000

CMD ["node", "server/index.mjs"]
