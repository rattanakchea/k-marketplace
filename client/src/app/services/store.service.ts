import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IProduct } from '../interfaces/product';


@Injectable()
export class StoreService {

  products: IProduct[] = [];

  constructor() {
  }

}
