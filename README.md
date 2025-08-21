# Discord Listener Bot (Docker)

A simple Discord bot that listens to messages in a specific channel and forwards them to a webhook URL, running in a Docker container.

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
     --restart unless-stopped \
     -e BOT_TOKEN=your_discord_bot_token \
     -e CHANNEL_ID=your_discord_channel_id \
     -e WEBHOOK_URL=your_webhook_url \
     discord-listener
   ```

   Replace the following placeholders with your actual values:
   - `your_discord_bot_token`: Your Discord bot token
   - `your_discord_channel_id`: The ID of the channel to monitor
   - `your_webhook_url`: The webhook URL where messages will be forwarded