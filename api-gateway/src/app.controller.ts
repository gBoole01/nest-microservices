import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequestDto } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(@Body() createUserRequestDto: CreateUserRequestDto) {
    return this.appService.createUser(createUserRequestDto);
  }

  // @Get('analytics')
  // getAnalytics() {
  //   return this.appService.getAnalytics();
  // }
}
