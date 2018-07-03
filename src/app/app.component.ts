import { Component } from '@angular/core';
import { ProductsService} from './module/products.service';
import { Products} from './module/products';
import { CategoriesService} from './module/categories.service';
import { Categories} from './module/categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsService, CategoriesService]
})
export class AppComponent {
  public CurrentCategory = null;
  public Id: number = 1;

  products: Products[]=[];
  categories: Categories[]=[];
  constructor (
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}


  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
    this.products=this.productsService.getProducts();
    this.Id = this.productsService.getNextID();
  }
  MainCategory: string = null;
  onChanged(category?: string) {
    this.MainCategory = category;
    this.CurrentCategory = category;
    this.products=this.productsService.getProducts(this.CurrentCategory);
  }

  addProduct(Object) {
    this.productsService.addProducts(Object.id, Object.name, Object.category, Object.price);
    this.products=this.productsService.getProducts();
    this.Id = this.productsService.getNextID();
  }
}
