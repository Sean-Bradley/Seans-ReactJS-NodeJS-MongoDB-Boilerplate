FROM node:alpine

LABEL https://github.com/Sean-Bradley

COPY /nodejs /nodejs
WORKDIR /nodejs

RUN npm install -g babel-cli
RUN npm install

RUN ls

EXPOSE 8080:8080
