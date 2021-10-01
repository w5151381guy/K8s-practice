FROM node:lts-alpine as builder

RUN mkdir -p /app
WORKDIR /app

COPY ./package*.json /app/
RUN npm ci

COPY . /app
RUN npm run-script build

FROM nginx

COPY ./default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]