import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContnactUsComponent } from './contact-us/contact-us.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductItemService} from './product-item.service'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContnactUsComponent,
    NavComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
