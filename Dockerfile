FROM node:12.9.1-alpine

WORKDIR /app
COPY . .

RUN yarn install && yarn build

EXPOSE 3000
CMD ["yarn", "start"]
