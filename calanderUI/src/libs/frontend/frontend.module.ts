import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalanderComponent } from './calander/calander.component';



@NgModule({
  declarations: [CalanderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CalanderComponent
  ]
})
export class FrontendModule { }
