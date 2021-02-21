FROM node:latest
RUN mkdir -p /usr/src/product-app
WORKDIR /usr/src/product-app
COPY package.json /usr/src/product-app/
RUN yarn install
COPY . /usr/src/product-app
EXPOSE 3000
CMD [ "yarn", "start" ]
