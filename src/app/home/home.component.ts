import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../room/users/users.model';
import { AuthService } from '../shared/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  user: User;

  subscriptions: Subscription[] = [];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.user) {
      this.user = this.authService.user;
    } else {
      const sub = this.authService.onLogin.subscribe(user => this.user = user);
      this.subscriptions.push(sub);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe);
  }
}
