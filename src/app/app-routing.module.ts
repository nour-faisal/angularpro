import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContnactUsComponent } from './contact-us/contact-us.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component'

const routes: Routes = [
  {path: 'about' , component :AboutComponent},
  {path: 'contact' , component :ContnactUsComponent},
  {path: 'product' , component :ProductListComponent},
  {path: 'product/:id' , component :ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ProductListComponent,
                                ProductDetailComponent
  
]


