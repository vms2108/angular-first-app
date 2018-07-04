import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component ({
  selector: 'app-products-add',
  templateUrl: 'products-add.component.html',
  styleUrls: ['products-add.component.scss']
})

export class AppProductsAddComponent {
  @Input() CategoriesFrom: any = null;
  @Input() id = 1;
  @Output() NewProduct = new EventEmitter <any>();
  addProduct(id: number, name: string, category: string, price: number) {
    this.NewProduct.emit({id, name, category, price});
  }

}
