import { Component, OnInit } from '@angular/core';
import { SocketService } from './shared/services/socket/socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.initSocket();
  }

}
