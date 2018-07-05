import { Categories} from './categories';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesService {
  constructor (private http: HttpClient) {}
  getData() {
    return this.http.get('./assets/categories.json');
  }
}
