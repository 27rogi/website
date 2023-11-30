FROM node:20-slim as build

WORKDIR /home/rogisu
COPY ./ /home/rogisu

RUN node -v

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

FROM node:20-slim as runnable

ARG BRANCH
ENV NUXT_PUBLIC_BRANCH=${BRANCH}

WORKDIR /home/rogisu

COPY --from=build /home/rogisu/.output ./

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["node", "server/index.mjs"]
