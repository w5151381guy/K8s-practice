FROM node:lts-alpine as builder

RUN mkdir -p /app
WORKDIR /app

COPY ./package*.json /app/
RUN npm ci

COPY . /app
ENTRYPOINT [ "node", "index.js" ]