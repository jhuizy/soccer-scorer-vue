FROM node:8.10

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
ENV PORT=3000
EXPOSE $PORT
CMD ["npm", "run", "dev"] 
