FROM node:20-alpine3.16

WORKDIR /fontend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","run","dev" ]