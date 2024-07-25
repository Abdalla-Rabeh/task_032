import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MybtnComponent } from './mybtn/mybtn.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MybtnComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[MybtnComponent]
})
export class SharedModule { }
