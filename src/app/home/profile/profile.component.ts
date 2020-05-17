import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/room/users/users.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { SetData } from 'src/app/shared/services/auth/auth.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() user: User;
  isEditing = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  setUsername() {
    this.authService.setUserData(SetData.username, this.user.name);
  }
}
