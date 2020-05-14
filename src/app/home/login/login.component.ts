import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import { environment } from 'src/environments/environment';
import { SocketService } from 'src/app/shared/services/socket/socket.service';
import { User } from 'src/app/room/users/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: firebase.User;
  token: string;
  firebaseApp: firebase.app.App;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    if (firebase.apps.length === 0) {
      this.initializeFirebase();
    }
  }

  initializeFirebase() {
    this.firebaseApp = firebase.initializeApp(environment.firebaseConfig, 'Boblin Assistant');
    firebase.analytics(this.firebaseApp);
  }

  authenticate() {
    const provider = new firebase.auth.GoogleAuthProvider();
    from(firebase.auth(this.firebaseApp).signInWithPopup(provider)).subscribe(
      res => {
        if (res.credential) {
          const credential = res.credential as firebase.auth.OAuthCredential;
          this.token = credential.accessToken;
        }
        this.user = res.user;
        this.login();
      },
      error => {
        console.log(error);
      });
  }

  login(): void {
    const user = new User(this.user.displayName);
    this.socketService.user = user;
    this.socketService.sendUser(user);
  }

}
