import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    const dbUser = this.configService.get<string>('DB_USER')
   // return this.appService.getHello();
   return `Usuário do banco: ${dbUser}`
  }
}
