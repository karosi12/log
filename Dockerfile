FROM node:10-alpine
USER root
WORKDIR /usr/src/log

COPY package*.json ./
RUN npm install
COPY . .
ENTRYPOINT npm run start
EXPOSE 3300