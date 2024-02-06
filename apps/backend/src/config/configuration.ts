export default (): any => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  telegramBotToken: process.env.telegramBotToken,
  mongo_uri: process.env.DATABASE_HOST,
});
