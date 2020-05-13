import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import { DiceTableModule } from './dice-table/dice-table.module';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { RoomRoutingModule } from './room-routing.module';



@NgModule({
  declarations: [
    RoomComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    DiceTableModule,
    UsersModule,
    ChatModule
  ]
})
export class RoomModule { }
