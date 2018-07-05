import { Categories} from './categories';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesService {
  constructor (private http: HttpClient) {}
  //private data: Categories[] = [
    //{category: 'mobile phone'},
    //{category: 'car'},
    //{category: 'house'}
  //];

 // getCategories() {
    //return this.data;
  //}

 // addCategories(Category: string) {
      //this.data.push(new Categories(Category));
  //}

  getData() {
    return this.http.get('./assets/categories.json');
  }
}
