FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

# Не копируем исходный код и не собираем!
# Код будет монтироваться через volume в реальном времени
EXPOSE 3000

CMD ["npm", "run", "start:dev"]