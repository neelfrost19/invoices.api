FROM node:20

WORKDIR /app

COPY package* /app/

RUN apt-get update && apt-get install -y \
    wget \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libxshmfence1 \
    libxss1 \
    libxtst6 \
    libnss3 \
    libnss3-tools \
    libnspr4 \
    libgbm1 \
    libdrm2 \
    --no-install-recommends

RUN npm install

COPY . /app/

EXPOSE 3001

CMD ["npm", "start"]
