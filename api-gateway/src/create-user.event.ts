export class CreateUserEvent {
  constructor(public email: string) {}

  toString() {
    return JSON.stringify(this);
  }
}
