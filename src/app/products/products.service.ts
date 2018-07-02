import { Products } from './products';
import { Injectable } from "@angular/core";


@Injectable()
export class ProductsService {
  private data: Products[] = [
    { id: 1, name: "iphone 7", category: "mobile phone", price: 250 },
    { id: 2, name: "Motorolla", category: "mobile phone", price: 120 },
    { id: 3, name: "Tayota Corolla", category: "car", price: 22250 },
    { id: 4, name: "Honday Solaris", category: "car", price: 37850 },
    { id: 5, name: "Philips", category: "mobile phone", price: 220 },
    { id: 6, name: "Niva", category: "car", price: 12370 },
    { id: 7, name: "Villa in Spain", category: "house", price: 500000 },
    { id: 8, name: "Room in Moskow", category: "house", price: 1500000 },
    { id: 9, name: "Apartament in USA", category: "house", price: 700000 },
    { id: 10, name: "Hostel in Peterghof", category: "house", price: 800 },
    { id: 11, name: "BMW X7", category: "car", price: 100000 },
    { id: 12, name: "HTC", category: "mobile phone", price: 110 },
  ];

  getProducts(category: string = null): Products[] {
    return this.data
    .filter(p => category == null || category == p.category);
  }
  addProducts(id: number, name: string, category: string, price: number) {
    this.data.push(new Products(id, name, category, price));
  }
}
