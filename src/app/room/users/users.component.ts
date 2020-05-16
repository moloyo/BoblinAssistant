import { Component, OnInit } from '@angular/core';
import { User } from './users.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.users = this.authService.users;
  }
}
