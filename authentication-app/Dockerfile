FROM node:latest
RUN mkdir -p /usr/src/authentication-app
WORKDIR /usr/src/authentication-app
COPY package.json /usr/src/authentication-app/
RUN yarn install
COPY . /usr/src/authentication-app
EXPOSE 3001
CMD [ "yarn", "start" ]
