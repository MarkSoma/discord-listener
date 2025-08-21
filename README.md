# Discord Listener Bot (Docker)

I created this because I was running a local N8N instance and wanted to be able to have a Discord bot respond to incoming messages. By running it on the same user defined Docker bridge network as the N8N container, no public facing tunnel is required for incoming webhooks and N8N can quickly facilitate the interaction between Discord and the backend AI server.

## Prerequisites

- Docker
- Discord Bot Token
- Discord Channel ID
- Webhook URL for forwarding messages

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/MarkSoma/discord-listener.git
   cd discord-listener
   ```

2. **Build the Docker image**
   ```bash
   docker build -t discord-listener .
   ```

3. **Run the container**
   ```bash
   docker run -d --name discord-bot \
     --restart always \
     -e BOT_TOKEN=your_discord_bot_token \
     -e CHANNEL_ID=your_discord_channel_id \
     -e WEBHOOK_URL=your_webhook_url \
     discord-listener
   ```

   Replace the following placeholders with your actual values:
   - `your_discord_bot_token`: Acquired from https://discord.com/developers/applications, create an application and generate a bot token
   - `your_discord_channel_id`: From Discord, you have to turn on developer mode and then you are able to copy the ID by right-clicking on the channel. Can also just grab the last part of the URL when you click into the channel.
   - `your_webhook_url`: In my case, this was a webhook trigger in N8N listening for POST requests
