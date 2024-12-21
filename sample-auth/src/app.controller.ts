import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { GetUserRequest } from './get-user.request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_user' })
  getUser({ userId }: GetUserRequest) {
    return this.appService.getUser(userId);
  }
}
