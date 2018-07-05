import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppProductsComponent } from './products/products.component';
import { AppProductsAddComponent } from './products/products-add/products-add.component';
import { AppSortingComponent } from './sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    AppProductsComponent,
    AppSortingComponent,
    AppProductsAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
