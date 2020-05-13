import { User } from '../users/users.model';

export class Message {
    constructor(public from: User, public content: string) {}
}
