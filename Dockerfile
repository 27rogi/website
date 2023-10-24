FROM node:18-alpine as build

WORKDIR /home/rspace
COPY ./ /home/rspace

RUN node -v

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

FROM node:18-alpine as runnable

ARG BRANCH
ENV NUXT_PUBLIC_BRANCH=${BRANCH}

WORKDIR /home/rspace

COPY --from=build /home/rspace/.output ./

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["node", "server/index.mjs"]
