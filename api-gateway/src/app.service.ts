import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserRequestDto } from './create-user-request.dto';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('COMMUNICATION_SERVICE')
    private readonly communicationClient: ClientKafka,
    @Inject('ANALYTICS_SERVICE') private readonly analyticsClient: ClientKafka,
  ) {}

  createUser({ email, password }: CreateUserRequestDto) {
    this.users.push({ email, password });
    this.communicationClient.emit('user_created', new CreateUserEvent(email));
    this.analyticsClient.emit('user_created', new CreateUserEvent(email));

    console.log('createUser - COMMUNICATION', email);
  }

  // getAnalytics() {
  //   return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  // }
}
