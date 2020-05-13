import { Injectable } from '@angular/core';
import { Message } from '../chat/chat.model';
import { Observable } from 'rxjs';
import { User } from '../users/users.model';

import * as socketIo from 'socket.io-client';
import { Socket } from 'socket.io';
import { Roll } from '../dice-table/dice-table.model';

const SERVER_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;

  constructor() { }

  public initSocket(user: User): void {
    this.socket = socketIo(SERVER_URL);
    this.socket.emit('user', user);
  }

  public sendMessage(message: Message): void {
    this.socket.emit('message', message);
  }

  public sendRoll(roll: Roll[]) {
    this.socket.emit('roll', roll);
  }

  public onUsers(): Observable<User[]> {
    return new Observable<User[]>(observer => {
      this.socket.on('users', (data: User[]) => observer.next(data));
    });
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  public onRoll(): Observable<Roll[]> {
    return new Observable<Roll[]>(observer => {
      this.socket.on('roll', (data: Roll[]) => observer.next(data));
    })
  };
}
