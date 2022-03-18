FROM node:17.7-slim

RUN apt-get update && \
    apt-get install -y sox libsox-fmt-mp3

WORKDIR /spotify-radio/

COPY package*.json .

RUN npm ci --silent

USER node

CMD npm run live-reload
