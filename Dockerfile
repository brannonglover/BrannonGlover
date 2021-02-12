FROM node:15.5.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3200

CMD ["npm", "start"]