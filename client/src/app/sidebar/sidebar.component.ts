import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { StoreService } from '../services/store.service';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {

  constructor(private apiService: ApiService, private storeService: StoreService) { }

  getProductsByCategory( category: string) {
   
    this.apiService.get(`/products/category/${category}`).subscribe( categoryItems => {
      console.warn('sidebar', categoryItems);
      this.storeService.products = categoryItems;
    })
  }
  

}
