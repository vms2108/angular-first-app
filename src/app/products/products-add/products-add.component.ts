import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component ({
  selector: 'app-products-add',
  templateUrl: 'products-add.component.html',
  styleUrls: ['products-add.component.scss']
})

export class AppProductsAddComponent implements OnInit {
  @Input() CategoriesFrom: any = null;
  @Input() id = 1;
  @Output() NewProduct = new EventEmitter <any>();
  addProduct(id: number, name: string, category: string, price: number) {
    this.NewProduct.emit({id, name, category, price});
    this.myForm = new FormGroup({

      'userName': new FormControl('', [
                          Validators.required,
                          Validators.pattern('[a-zA-Z\s]{2,10}')
                        ]),
      'userCategory': new FormControl('', [
                          Validators.required
                      ]),
      'userPrice': new FormControl('', [
                          Validators.required,
                          Validators.pattern('[0-9]{2,9}')
                        ])
    });
  }

  ngOnInit() {}

  // tslint:disable-next-line:member-ordering
  myForm: FormGroup;
    constructor() {
        this.myForm = new FormGroup({

            'userName': new FormControl('', [
                                Validators.required,
                                Validators.pattern('[a-zA-Z\s]{2,10}')
                              ]),
            'userCategory': new FormControl('', [
                                Validators.required
                            ]),
            'userPrice': new FormControl('', [
                                Validators.required,
                                Validators.pattern('[0-9]{2,9}')
                              ])
        });
    }

}
