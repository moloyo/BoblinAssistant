import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-connected-users',
  templateUrl: './connected-users.component.html',
  styleUrls: ['./connected-users.component.scss']
})
export class ConnectedUsersComponent implements OnInit {

  get users() {
    return this.usersService.getUsers();
  }

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }
}
