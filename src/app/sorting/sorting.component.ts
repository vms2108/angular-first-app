import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component ({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})

export class AppSorting {

  @Input() CategoriesFrom: any = null;
  @Output() onChanged = new EventEmitter <string> ();

  changeCategory(newCategory?: string) {

    this.onChanged.emit(newCategory);
  }

}
