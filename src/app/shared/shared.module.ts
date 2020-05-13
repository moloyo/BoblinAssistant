import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketService } from './services/socket/socket.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SocketService
  ]
})
export class SharedModule { }
