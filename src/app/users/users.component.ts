import { Component, OnInit } from '@angular/core';
import { SocketService } from '../shared/socket.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.onUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
