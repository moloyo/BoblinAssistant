import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SocketService } from '../shared/socket.service';
declare var UnityLoader: any;

@Component({
  selector: 'app-dice-table',
  templateUrl: './dice-table.component.html',
  styleUrls: ['./dice-table.component.scss']
})
export class DiceTableComponent implements AfterViewInit {
  gameInstance: any;

  constructor(private socketService: SocketService) { }

  ngAfterViewInit(): void {
    this.gameInstance = UnityLoader.instantiate('gameContainer', 'assets/unity/Build/Build.json');

    window.addEventListener('result', (e: CustomEvent) => {
      console.log(e.detail);
    });

    window.addEventListener('roll', (e: CustomEvent) => {
      console.log(e.detail);
      this.socketService.sendRoll(e.detail);
    });

    this.socketService.onRoll().subscribe(res => console.log(res));
  }

  setFullscreen() {
    this.gameInstance.SetFullscreen(1);
  }
}


