import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/services/game/game.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  diceTableHeight = 65;
  chatRoomHeight = 19;
  isResizing = false;

  sidebarHover: boolean;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  handleSidebarHover(isHovering: boolean) {
    this.sidebarHover = isHovering;
  }

  handleResizeStart(className: string) {
    if (className === 'chat-resize') {
      this.isResizing = true;
    }
  }

  handleResize(event: MouseEvent | TouchEvent) {
    if (this.isResizing && event instanceof MouseEvent) {
      this.gameService.resizeGame();
      this.diceTableHeight = Math.floor((event.y / window.innerHeight * 100)) - 15;
      this.chatRoomHeight = 100 - 1 - 15 - this.diceTableHeight;
    } else if (this.isResizing && event instanceof TouchEvent) {
      this.gameService.resizeGame();
      this.diceTableHeight = Math.floor((event.touches[event.touches.length - 1].clientY / window.innerHeight * 100)) - 15;
      this.chatRoomHeight = 100 - 1 - 15 - this.diceTableHeight;
    }
  }

  handleResizeStop() {
    this.isResizing = false;
    this.gameService.resizeGame();
  }
}
