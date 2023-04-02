FROM node:18.15.0-alpine as build

WORKDIR /home/rspace
COPY ./ /home/rspace

RUN node -v

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

FROM node:18.15.0-alpine as runnable

WORKDIR /home/rspace

COPY --from=build /home/rspace/.output ./

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["node", "server/index.mjs"]
