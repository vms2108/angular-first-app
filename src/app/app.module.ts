import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppProducts } from './products/products.component';
import { AppSorting } from './sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    AppProducts,
    AppSorting
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
