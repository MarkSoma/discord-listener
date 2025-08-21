// Listener to relay message to a webhook whenever a message is sent to a specific channel
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  // Ignore bot messages
  if (message.author.bot) return;

  // Filter for a specific channel
  if (message.channel.id === process.env.CHANNEL_ID) {
    console.log(`📨 Message received: ${message.content}`);
    
    // Forward the message to the N8N webhook
    try {
      const response = await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: message.content,
          username: message.author.username,
          userId: message.author.id,
          timestamp: new Date().toISOString()
        })
      });
      
      if (!response.ok) {
        console.error(`Sending to webhook failed with status: ${response.status}`);
      } else {
        console.log('Message forwarded to webhook');
      }
    } catch (error) {
      console.error('Error sending to webhook:', error.message);
    }
  }
});

// Login to Discord with the Bot credentials
client.login(process.env.BOT_TOKEN);