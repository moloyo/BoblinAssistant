import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';
import { environment } from 'src/environments/environment.env';
import { User } from 'src/app/room/users/users.model';
import { SocketService } from '../socket/socket.service';
import { SetData } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  onLogin: Subject<User> = new Subject<User>();
  user: User;
  users: User[];

  firebaseApp: firebase.app.App;
  authProvider: firebase.auth.GoogleAuthProvider;
  database: firebase.database.Database;
  firebaseUser: firebase.User;
  firebaseToken: string;

  constructor(private socketService: SocketService) {
    this.initializeFirebase();
    this.onUserConnect();
  }

  onUserConnect() {
    this.socketService.onUsers().subscribe(res => this.users = res);
  }

  initializeFirebase() {
    this.firebaseApp = firebase.initializeApp(environment.firebaseConfig, 'Boblin Assistant');
    firebase.analytics(this.firebaseApp);
  }

  authenticate() {
    this.authProvider = new firebase.auth.GoogleAuthProvider();
    from(firebase.auth(this.firebaseApp).signInWithPopup(this.authProvider)).subscribe(
      res => {
        if (res.credential) {
          const credential = res.credential as firebase.auth.OAuthCredential;
          this.firebaseToken = credential.accessToken;
        }
        this.login(res.user);
      },
      error => {
        console.log(error);
      });
  }

  getUserData() {
    this.database = this.firebaseApp.database();
    this.database.ref(`users/${this.firebaseUser.uid}/username`).once('value', username => {
      console.log(username);
      this.user = username.val() ? new User(username.val()) : new User(this.firebaseUser.displayName);
      this.onLogin.next(this.user);
      this.socketService.sendUser(this.user);
    });
  }

  setUserData(type: SetData, data: any) {
    if (type === SetData.username) {
      this.database.ref(`users/${this.firebaseUser.uid}/username`).set(data, (e) => console.log(e));
      this.user = new User(data);
      this.socketService.sendUser(this.user);
    }
  }

  login(firebaseUser: firebase.User): void {
    this.firebaseUser = firebaseUser;
    this.getUserData();
  }
}
