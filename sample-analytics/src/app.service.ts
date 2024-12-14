import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  onUserCreated(event: CreateUserEvent) {
    this.analytics.push({
      email: event.email,
      timestamp: new Date().toISOString(),
    });
    console.log('onUserCreated - COMMUNICATION', event);
  }

  getAnalytics() {
    return this.analytics;
  }
}
