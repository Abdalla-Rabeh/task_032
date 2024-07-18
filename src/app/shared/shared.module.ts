import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MybtnComponent } from './mybtn/mybtn.component';


@NgModule({
  declarations: [
    MybtnComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[MybtnComponent]
})
export class SharedModule { }
