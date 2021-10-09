FROM node:14.16.0-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

FROM node:14.16.0-alpine as production

WORKDIR /usr/src/app

RUN apk add --no-cache bash

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5000

CMD ["/bin/bash", "startup.sh"]