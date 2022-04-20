FROM node:16.14

# Create app directory
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

EXPOSE 8080
HEALTHCHECK CMD node tools/healthcheck.js
CMD [ "npm", "start" ]
