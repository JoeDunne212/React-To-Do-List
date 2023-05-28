FROM node:alpine as build

# Defining the working directory for the container
WORKDIR /usr/src/client
COPY package.json .
COPY setupProxy.js .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]