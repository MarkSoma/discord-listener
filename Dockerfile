FROM node:18-alpine
WORKDIR /app
COPY discord-listener.js .
RUN npm install discord.js dotenv node-fetch@2
ENV NODE_ENV=production
CMD ["node", "discord-listener.js"]
