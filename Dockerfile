FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . ./

CMD ["npm", "run", "dev"]