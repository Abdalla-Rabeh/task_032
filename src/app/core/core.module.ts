import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  // providers: [
  //   provideHttpClient(withInterceptorsFromDi())
  // ]
})
export class CoreModule { }
