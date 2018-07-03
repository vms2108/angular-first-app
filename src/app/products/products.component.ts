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
  @Input() Newsorting: string = null;
  products: Products[]=[];
  sort: string = null;
  id: number = 1;

  constructor (private productsService: ProductsService) {}

  ngOnInit() {
    this.products=this.productsService.getProducts();
    this.id = this.productsService.getNextID();
  }

  @Input()
  set newsorting(Newsorting) {
    this.products=this.productsService.getProducts(Newsorting);
    this.sort = Newsorting;

  }

  addProduct(id: number, name: string, category: string, price: number) {
    this.productsService.addProducts(id, name, category, price);
    this.products=this.productsService.getProducts();
    this.id = this.productsService.getNextID();
  }

}
