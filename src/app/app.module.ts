import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CartsComponent } from './components/carts/carts.component';
import { ProductsComponent } from './components/products/products.component';
import { CoreModule } from './core/core.module';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CartsComponent,
    ProductsComponent,
    ProductsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    

    CoreModule,
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
