import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  onUserCreated(event: CreateUserEvent) {
    // TODO: Send email to user
    console.log('onUserCreated - COMMUNICATION', event);
  }
}
