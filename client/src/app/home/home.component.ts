import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { IProduct } from '../interfaces/product';

@Component({
  selector: 'k-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  products: IProduct[];  //array of products

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.get('/products').subscribe( products => {
      console.log(products);
      this.products = products;
    })
  }

}
