import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';
import { GetUserRequest } from './get-user.request';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  onUserCreated(event: CreateUserEvent) {
    this.authClient
      .send('get_user', new GetUserRequest(event.email))
      .subscribe((user) => {
        console.log('onUserCreated - AUTH', user);
      });
    // TODO: Send email to user
    console.log('onUserCreated - COMMUNICATION', JSON.stringify(event));
  }
}
