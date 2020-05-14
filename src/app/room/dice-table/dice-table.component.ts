import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { SocketService } from '../../shared/services/socket/socket.service';
import { GameService } from 'src/app/shared/services/game/game.service';
declare var UnityLoader: any;

@Component({
  selector: 'app-dice-table',
  templateUrl: './dice-table.component.html',
  styleUrls: ['./dice-table.component.scss']
})
export class DiceTableComponent implements AfterViewInit, OnDestroy {

  @ViewChild('gameContainer') gameContainerRef: ElementRef;
  constructor(private socketService: SocketService, private gameService: GameService) { }

  ngAfterViewInit(): void {
    this.gameService.gameInstance = UnityLoader.instantiate('gameContainer', 'assets/unity/Build/Build.json');
    this.gameService.gameContainer = this.gameContainerRef.nativeElement;
    console.log(this.gameService.gameInstance);

    console.log(UnityLoader)
    window.addEventListener('result', (e: CustomEvent) => {
      console.log(e.detail);
    });

    window.addEventListener('roll', (e: CustomEvent) => {
      console.log(e.detail);
      this.socketService.sendRoll(e.detail);
    });

    this.socketService.onRoll().subscribe(res => console.log(res));
  }

  ngOnDestroy() {
    this.gameService.gameInstance.SendMessage('Main Camera', 'Quit');
  }
  setFullScreen(mode: number) {
    this.gameService.setFullscreen(mode);
  }
}


