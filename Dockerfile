FROM node:12.13-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./build ./build

CMD ["npm", "run", "typeorm","migration:run","--","-d","src/data-source.ts"]
CMD ["npm", "run", "start"]