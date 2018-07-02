import { Component, OnInit, Input} from '@angular/core';
import { ProductsService} from './products.service';
import { Products} from './products';
import { AppSorting} from '../sorting/sorting.component';

@Component ({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.scss'],
  providers: [ProductsService]
})

export class AppProducts implements OnInit{
  @Input() newsorting: string = null;
  products: Products[]=[];
  constructor (private productsService: ProductsService) {}

  ngOnInit() {
    this.products=this.productsService.getProducts(null);
  }
  if (newsorting) {
    this.products=this.productsService.getProducts(newsorting);
  }
  @Input()
  set newsorting(newsorting) {
    this.products=this.productsService.getProducts(newsorting);
  }

}
