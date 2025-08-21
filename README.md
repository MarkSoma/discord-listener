# Discord Listener Bot

A simple Discord bot that listens to messages in a specific channel and forwards them to a webhook URL.

## Prerequisites

- Docker (or Node.js 18+ if running directly)
- Discord Bot Token
- Discord Channel ID
- Webhook URL for forwarding messages

## Environment Variables

Create a `.env` file in the project root with the following variables:

```
BOT_TOKEN=your_discord_bot_token
CHANNEL_ID=your_discord_channel_id
WEBHOOK_URL=your_webhook_url
```

## Building with Docker

1. Build the Docker image:
   ```bash
   docker build -t discord-listener .
   ```

2. Run the container:
   ```bash
   docker run -d --name discord-bot \
     --restart unless-stopped \
     -e BOT_TOKEN=your_bot_token \
     -e CHANNEL_ID=your_channel_id \
     -e WEBHOOK_URL=your_webhook_url \
     discord-listener
   ```

## Running without Docker

1. Install dependencies:
   ```bash
   npm install discord.js dotenv node-fetch@2
   ```

2. Start the bot:
   ```bash
   node discord-listener.js
   ```

## Logs

To view the bot logs:
```bash
docker logs -f discord-bot
```

## Stopping the Bot

To stop the container:
```bash
docker stop discord-bot
```

To remove the container:
```bash
docker rm discord-bot
```
## How It Works

- The bot connects to Discord using your bot token
- Listens for messages in the specified channel
- Forwards each message to the configured webhook URL
- Includes message content, sender username, user ID, and timestamp

## Troubleshooting

- Ensure your bot has the necessary permissions in the Discord server
- Verify the channel ID is correct
- Check that the webhook URL is valid and accessible
- Check Docker logs for any error messages
