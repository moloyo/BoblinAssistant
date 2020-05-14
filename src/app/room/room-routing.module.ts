import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: '', pathMatch: 'full', component: RoomComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoomRoutingModule { }
