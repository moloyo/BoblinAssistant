import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Observable, of } from 'rxjs';

const MOCK_USERS = [
  new User('Tim'),
  new User('Nami'),
  new User('BaronB')
];


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(MOCK_USERS);
  }
}
