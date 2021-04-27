import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
    declarations: [
    ProductsComponent,
    AddProductComponent,
  ]
})
export class ProductModule { }
