const { App } = require('@slack/bolt');

const app = new App({
  token: 'xapp-1-A05KGUNR1E0-5660539071554-caff181a3ed3a05d993e8431d82b2677512710ac6636f88e05feb62c80c10911', 
  signingSecret: 'a7fc384406ad78d1e804c6946cd87706', 
});

app.command('/hello', async ({ command, ack, say }) => {
  await ack();
  say('Hello there!');
});

app.command('/help', async ({ command, ack, say }) => {
  await ack();
  const helpMessage = `
  Available commands:
  - /hello: The bot will reply with a greeting message like "Hello there!"
  - /help: The bot will display a list of available commands and their usage instructions.
  - /time: The bot will provide the current date and time.
  `;
  say(helpMessage);
});

app.command('/time', async ({ command, ack, say }) => {
  await ack();
  const currentTime = new Date().toLocaleString();
  say(`The current date and time is: ${currentTime}`);
});

app.error(async (error) => {
  console.error('Slack bot error:', error);
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('Slack bot is running!');
})();
