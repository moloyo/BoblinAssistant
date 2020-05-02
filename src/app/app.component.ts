import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;

  metodo() {
    this.loquesea = 'Esto ahora es una variable valida';
  }
}
