import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceTableComponent } from './dice-table.component';



@NgModule({
  declarations: [DiceTableComponent],
  imports: [
    CommonModule
  ], 
  exports: [DiceTableComponent]
})
export class DiceTableModule { }
