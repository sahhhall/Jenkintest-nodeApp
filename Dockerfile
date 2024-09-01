FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .

expose 3001

CMD ["npm", "start"]