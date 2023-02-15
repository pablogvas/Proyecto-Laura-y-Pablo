import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { GestionComponent } from './gestion/gestion.component';
import { StartComponent } from './start/start.component';
import { ProductsComponent } from './products/products.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    GestionComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
