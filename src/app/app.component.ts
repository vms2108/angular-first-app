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
  public productsPerPage = 5;
  public selectedPage = 1;

  // tslint:disable-next-line:member-ordering
  categories: Categories[] = [];
  productsFromFile: Products[] = [];
  constructor (
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}


  ngOnInit() {
    this.Id = this.productsService.getNextID();
    this.categoriesService.getData().subscribe((data: Categories) => this.categories = data['categories']);
    this.productsService.getData().subscribe((data: Products) => this.productsFromFile = data['productsList']);
  }
  onChanged(category?: string) {
    this.CurrentCategory = category;
    this.changePage(1);
    this.productsService.getData().subscribe((data: Products) => this.productsFromFile = data['productsList']);
  }

  addProduct(Object) {
    this.productsService.addProducts(Object.id, Object.name, Object.category, Object.price);
    this.Id = this.productsService.getNextID();
  }

  get products(): Products[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    this.changePage(this.selectedPage);
    return this.productsService.getProducts(this.CurrentCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.productsService
      .getProducts(this.CurrentCategory).length / this.productsPerPage)).fill(0).map((x, i) => i + 1);
  }
}
