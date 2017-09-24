import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import { Categories } from '../data/data';
import { Router } from '@angular/router';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {

  categories = Categories;

  constructor(private router: Router, private storeService: StoreService) { }

  getProductsByCategory( category: string) {

    this.router.navigate([`/category/${category}`])
  
  }
  

}
