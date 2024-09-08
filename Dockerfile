FROM node:20-alpine3.19

LABEL maintainer="Romuald Oluwatobi <romualdnoualinon@gmail.com>"

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]