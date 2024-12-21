import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      id: '1',
      email: 'user1@example.com',
      password: 'password1',
    },
    {
      id: '2',
      email: 'user2@example.com',
      password: 'password2',
    },
  ];

  getUser(userId: string) {
    return this.users.find((user) => user.id === userId);
  }
}
