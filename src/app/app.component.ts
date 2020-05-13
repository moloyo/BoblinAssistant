import { Component, OnInit } from '@angular/core';
import { User } from './users/users.model';
import { SocketService } from './shared/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user = new User(`Demo user ${this.getRandomInt(100, 999)}`);

  diceTableHeight = 80;
  chatRoomHeight = 19;
  isResizing = false;

  sidebarHover: boolean;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket(this.user);
  }

  // DELETE THIS
  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleSidebarHover(isHovering: boolean) {
    this.sidebarHover = isHovering;
  }

  handleResizeStart(className: string) {
    if (className === 'chat-resize') {
      this.isResizing = true;
    }
  }

  handleResize(event: MouseEvent) {
    if (this.isResizing) {
      this.diceTableHeight = Math.floor(event.y / window.innerHeight * 100);
      this.chatRoomHeight = 99 - this.diceTableHeight;
    }
  }

  handleResizeStop() {
    this.isResizing = false;
  }
}
