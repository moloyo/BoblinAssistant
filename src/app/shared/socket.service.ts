import { Injectable } from '@angular/core';
import { Message } from '../users/models/message.model';
import { Observable } from 'rxjs';
import { User } from '../users/models/user.model';

import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;

  constructor() { }

  public initSocket(user: User): void {
    this.socket = socketIo(SERVER_URL);
    this.socket.emit('user', user);
  }

  public send(message: Message): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  public onUsers(): Observable<User[]> {
    return new Observable<User[]>(observer => {
      this.socket.on('users', (data: User[]) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
