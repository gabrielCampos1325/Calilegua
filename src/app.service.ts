import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('APIKEY') private apiKey: string) {}
  getHello(): string {
    const apiKey = this.apiKey;
    return `La llave de la aplicacion es: ${apiKey}`;
  }
}
