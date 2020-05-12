import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-dice-table',
  templateUrl: './dice-table.component.html',
  styleUrls: ['./dice-table.component.scss']
})
export class DiceTableComponent implements AfterViewInit {
  gameInstance: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.gameInstance = UnityLoader.instantiate('gameContainer', 'assets/unity/Build/Build.json');
    window.addEventListener('result', (e: CustomEvent) => {
      console.log(e.detail);
    });
    window.addEventListener('roll', (e: CustomEvent) => {
      console.log(e.detail);
    });
  }

  setFullscreen() {
    this.gameInstance.SetFullscreen(1);
  }
}
