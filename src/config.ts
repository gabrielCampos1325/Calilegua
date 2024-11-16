import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    postgres: {
      name: process.env.PG_DB,
      port: parseInt(process.env.PG_PORT, 10),
      password: process.env.PG_PASSWORD,
      user: process.env.PG_USER,
      host: process.env.PG_HOST,
    },
    mysql: {
      name: process.env.MYSQL_DB,
      port: parseInt(process.env.MYSQL_PORT, 10),
      password: process.env.MYSQL_PASSWORD,
      user: process.env.MYSQL_USER,
      host: process.env.MYSQL_HOST,
    },
    apiKey: process.env.API_KEY,
  };
});
