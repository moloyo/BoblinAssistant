import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectedUsersComponent } from './connected-users/connected-users.component';
import { UsersService } from './users.service';



@NgModule({
  declarations: [
    ConnectedUsersComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UsersService
  ],
  exports: [
    ConnectedUsersComponent
  ]
})
export class UsersModule { }
