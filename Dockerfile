FROM node:lts-alpine

WORKDIR /home/app/nest_project

RUN npm install -g @nestjs/cli@9.0.0

COPY package.json .

RUN npm install

EXPOSE 3001