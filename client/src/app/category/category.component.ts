import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'k-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {

  productCategory: string;
  products: any[];

  constructor(private aRoute: ActivatedRoute, private apiService: ApiService) { }

  // Todo card-column display vertically, items display into its widget

  ngOnInit() {

    this.aRoute.params.subscribe(params => {
      this.productCategory = params['name'];

      this.apiService.get(`/products/category/${this.productCategory}`).subscribe(items => {
        console.warn('sidebar', items);
        this.products = items;
      })
    })
  }

}
