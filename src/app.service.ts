import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getOk(): Array<string> {
    return ['1512','4826','3255','2845']
  }
}
