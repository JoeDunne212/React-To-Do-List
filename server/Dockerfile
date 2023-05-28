FROM node:alpine as build

# Defining the working directory for the container
WORKDIR /usr/src/server
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]