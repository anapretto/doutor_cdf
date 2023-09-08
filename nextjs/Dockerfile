FROM node:20.5-alpine
WORKDIR /app
RUN npm install -g next
COPY package.json .
EXPOSE 3000
CMD ["npm", "run", "dev"]


