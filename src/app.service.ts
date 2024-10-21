import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('APIKEY') private apiKey: string,
    @Inject('TAREA_ASINC') private tarea: any[],
  ) {}
  getHello(): string {
    const apiKey = this.apiKey;
    return `La llave de la aplicacion es: ${apiKey}`;
  }

  getUseFactory(): string {
    console.log(this.tarea);
    return 'Realizando tarea asincrona de ejemplo';
  }
}
