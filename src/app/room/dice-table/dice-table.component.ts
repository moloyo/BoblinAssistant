import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SocketService } from '../../shared/services/socket/socket.service';
import { GameService } from 'src/app/shared/services/game/game.service';
declare var UnityLoader: any;

@Component({
  selector: 'app-dice-table',
  templateUrl: './dice-table.component.html',
  styleUrls: ['./dice-table.component.scss']
})
export class DiceTableComponent implements AfterViewInit {

  @ViewChild('gameContainer') gameContainerRef: ElementRef;
  constructor(private socketService: SocketService, private gameService: GameService) { }

  ngAfterViewInit(): void {
    this.gameService.gameInstance =  UnityLoader.instantiate('gameContainer', 'assets/unity/Build/Build.json');
    this.gameService.gameContainer = this.gameContainerRef.nativeElement;

    window.addEventListener('result', (e: CustomEvent) => {
      console.log(e.detail);
    });

    window.addEventListener('roll', (e: CustomEvent) => {
      console.log(e.detail);
      this.socketService.sendRoll(e.detail);
    });

    this.socketService.onRoll().subscribe(res => console.log(res));
  }

  setFullScreen(mode: number){
    this.gameService.setFullscreen(mode)
  }
}


