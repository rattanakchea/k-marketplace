import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {

  constructor(private apiService: ApiService) { }

  getProductsByCategory( category: string) {
    this.apiService.get(`/products/category/${category}`)
  }
  

}
