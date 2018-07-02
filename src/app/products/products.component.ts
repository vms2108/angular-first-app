import { Component, OnInit} from '@angular/core';
import { ProductsService} from './products.service';
import { Products} from './products';

@Component ({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.scss'],
  providers: [ProductsService]
})

export class AppProducts implements OnInit{
  products: Products[]=[];
  constructor (private productsService: ProductsService) {}

  ngOnInit() {
    this.products=this.productsService.getProducts(this.CurrentCategory);
  }

  public CurrentCategory = null;

  Categories = [
    "mobile phone",
    "car",
    "house"
  ]

  changeCategory(newCategory?: string) {
    this.CurrentCategory = newCategory;
    this.products=this.productsService.getProducts(this.CurrentCategory);
  }
}
