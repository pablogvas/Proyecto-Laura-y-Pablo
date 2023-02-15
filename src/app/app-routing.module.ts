import { ProductsComponent } from './products/products.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { GestionComponent } from './gestion/gestion.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component: StartComponent},
  {path:"products", component: ProductsComponent},
  {path:"gestion", component: GestionComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }