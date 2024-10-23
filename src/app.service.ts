import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';
import { Client } from 'pg';

@Injectable()
export class AppService {
  constructor(
    @Inject('PG') private clientPg: Client,
    @Inject('TAREA_ASINC') private tarea: any[],
    @Inject(config.KEY) private configServ: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    const apiKey = this.configServ.apiKey;
    const dbname = this.configServ.database.name;
    const dbport = this.configServ.database.port;
    return `La llave de la aplicacion es: ${apiKey} y el nombre de la base de datos es ${dbname}, en el puerto ${dbport}`;
  }

  getUseFactory(): string {
    console.log(this.tarea);
    return 'Realizando tarea asincrona de ejemplo';
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPg.query('SELECT * FROM tasks', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}
