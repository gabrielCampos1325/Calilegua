import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    postgres: {
      dbName: process.env.PG_DB,
      port: parseInt(process.env.PG_PORT, 10),
      password: process.env.PG_PASSWORD,
      user: process.env.PG_USER,
      host: process.env.PG_HOST,
    },
    apiKey: process.env.API_KEY,
  };
});
