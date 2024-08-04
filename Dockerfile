FROM node:20

WORKDIR /app

COPY package* /app/

RUN npm install

COPY . /app/

EXPOSE 5003

CMD ["npm", "start"]
