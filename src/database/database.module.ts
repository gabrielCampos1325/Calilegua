import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from 'src/config';
import { TypeOrmModule } from '@nestjs/typeorm';

const APIKEY = 'DEV-456';
const APIKEYPROD = 'PROD-12345';

/*
const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'my_db',
  password: '123456',
  port: 5432,
});

client.connect();

client.query('SELECT * FROM tareas', (err, res) => {
  console.error(err);
  console.log(res.rows);
});
*/

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, name, password, port } = configService.postgres;
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: name,
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'APIKEY',
      useValue: process.env.NODE_ENV === 'prod' ? APIKEYPROD : APIKEY,
    },
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, name, password, port } = configService.postgres;
        const client = new Client({
          user,
          host,
          database: name,
          password,
          port,
        });
        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['APIKEY', 'PG', TypeOrmModule],
})
export class DatabaseModule {}
