import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component ({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})

export class AppSortingComponent {

  @Input() CategoriesFrom: any = null;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChanged = new EventEmitter <string> ();

  changeCategory(newCategory?: string) {

    this.onChanged.emit(newCategory);
  }

}
