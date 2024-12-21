import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './create-user.event';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  @EventPattern('user_created')
  onUserCreated(event: CreateUserEvent) {
    this.appService.onUserCreated(event);
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
