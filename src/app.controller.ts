import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // o nome da rota raiz
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('status') // rota /status
  getStatus(): string {
    return 'OK';
  }
}
