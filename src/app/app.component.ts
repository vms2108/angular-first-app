import { Component, OnInit } from '@angular/core';
import { ProductsService} from './module/products.service';
import { Products} from './module/products';
import { CategoriesService} from './module/categories.service';
import { Categories} from './module/categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductsService, CategoriesService]
})
export class AppComponent implements OnInit {
  public CurrentCategory = null;
  public Id = 1;
  public MainCategory: string = null;
  public title: string = null;

  getTitle(category?: string) {
    if (category) {
      return category;
    } else {
      return 'All categories';
    }
  }


  // tslint:disable-next-line:member-ordering
  products: Products[] = [];
  // tslint:disable-next-line:member-ordering
  categories: Categories[] = [];
  constructor (
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}


  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
    this.products = this.productsService.getProducts();
    this.Id = this.productsService.getNextID();
    this.title = this.getTitle();
  }
  onChanged(category?: string) {
    this.title = this.getTitle(category);
    this.CurrentCategory = category;
    this.products = this.productsService.getProducts(this.CurrentCategory);
  }

  addProduct(Object) {
    this.productsService.addProducts(Object.id, Object.name, Object.category, Object.price);
    this.products = this.productsService.getProducts(this.CurrentCategory);
    this.Id = this.productsService.getNextID();
  }
}
