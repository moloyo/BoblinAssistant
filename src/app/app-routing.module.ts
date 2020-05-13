import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '' , children: [
      { path: 'login', loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule) }
    ]
  },
  { path: 'room', loadChildren: () => import(`./room/room.module`).then(m => m.RoomModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
