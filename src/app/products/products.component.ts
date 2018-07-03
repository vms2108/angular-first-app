import { Component, OnInit, Input} from '@angular/core';

@Component ({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.scss']
})

export class AppProducts {

  @Input() ProductsFrom: any = null;

}
