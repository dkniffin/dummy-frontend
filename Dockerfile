FROM node:7.2.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /dummy-frontend
WORKDIR /dummy-frontend
ADD package.json /dummy-frontend/package.json
RUN npm install
ADD . /dummy-frontend
