import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'COMMUNICATION_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'communication',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'communication-consumer',
          },
        },
      },
      {
        name: 'ANALYTICS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'analytics',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'analytics-consumer',
          },
        },
      },
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'auth-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
