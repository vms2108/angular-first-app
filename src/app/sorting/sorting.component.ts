import { Component, OnInit} from '@angular/core';
import { ProductsService} from '../products/products.service';
import { Products} from '../products/products';
import { AppProducts} from '../products/products.component';

@Component ({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
  providers: [ProductsService]
})

export class AppSorting implements OnInit {
  ngOnInit() {}

  products: Products[]=[];
  constructor (private productsService: ProductsService) {}

  public CurrentCategory = null;

  Categories = [
    "mobile phone",
    "car",
    "house"
  ]

  changeCategory(newCategory?: string) {
    this.CurrentCategory = newCategory;
    this.products=this.productsService.getProducts(this.CurrentCategory);
    console.log(this.productsService.getProducts(this.CurrentCategory));
  }

}
