## Use the official Node.js LTS image
FROM node:18-alpine

## Create app directory
WORKDIR /app

## Copy source files
COPY . .

## Install required packages directly
RUN npm install discord.js dotenv node-fetch@2

## Set environment variables (you can override these when running the container)
ENV NODE_ENV=production

## Run the application
CMD ["node", "discord-listener.js"]