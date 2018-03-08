FROM node:8.9.4
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app 
RUN yarn install
EXPOSE 3005
CMD [ "npm", "start" ]