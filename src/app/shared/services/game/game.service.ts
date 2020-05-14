import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gameContainer: HTMLDivElement;
  gameInstance: any;
  isFullscreen = false;
  constructor() {
    window.addEventListener('resize', () => this.resizeGame());
  }

  setFullscreen(mode: number) {
    this.gameInstance.SetFullscreen(mode);
  }

  resizeGame() {
    if (!this.isFullscreen && this.gameInstance.Module.setCanvasSize) {
      const { offsetWidth: width, offsetHeight: height } = this.gameContainer;
      this.gameInstance.Module.setCanvasSize(width, height);
    }
  }
}
