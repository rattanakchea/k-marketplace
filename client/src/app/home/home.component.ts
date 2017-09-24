import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { IProduct } from '../interfaces/product';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'k-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  products: IProduct[];  //array of products

  constructor(private apiService: ApiService, private storeService: StoreService) { }

  ngOnInit() {

    this.apiService.get('/products').subscribe( products => {
      console.warn('products', products);
      this.storeService.products = products;
      this.products = this.storeService.products;
    })
  }

}
