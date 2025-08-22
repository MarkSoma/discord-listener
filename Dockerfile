## Pull Node.js image
FROM node:18-alpine

## Create app directory
WORKDIR /app

## Copy source files
COPY discord-listener.js .

## Install required packages
RUN npm install discord.js dotenv node-fetch@2

## Set environment variable for Node (other ENV variables are passed at run time)
ENV NODE_ENV=production

## Run the application
CMD ["node", "discord-listener.js"]
