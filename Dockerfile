FROM node:8.9.4
RUN mkdir -p /app/recommendations
WORKDIR /app/recommendations
COPY . /app/recommendations
RUN npm install
EXPOSE 3005
CMD [ "npm", "start" ]