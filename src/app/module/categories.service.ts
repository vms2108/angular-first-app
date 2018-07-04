import { Categories} from './categories';
import { Injectable} from '@angular/core';

@Injectable()
export class CategoriesService {
  private data: Categories[] = [
    {category: 'mobile phone'},
    {category: 'car'},
    {category: 'house'}
  ];

  getCategories() {
    return this.data;
  }

  addCategories(Category: string) {
      this.data.push(new Categories(Category));
  }
}
