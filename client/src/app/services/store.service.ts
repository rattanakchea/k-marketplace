import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IProduct } from '../interfaces/product';


@Injectable()
export class StoreService {

  _products: IProduct[] = [];
  selectedItem: any;
  
  get products() {
    return this._products;
  }

  set products(products: IProduct[]) {
    this._products = products;
  }

  constructor() {
  }

}
