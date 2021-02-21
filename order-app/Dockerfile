FROM node:latest
RUN mkdir -p /usr/src/order-app
WORKDIR /usr/src/order-app
COPY package.json /usr/src/order-app/
RUN yarn install
COPY . /usr/src/order-app
EXPOSE 3002
CMD [ "yarn", "start" ]
