import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.sass']
})
export class ViewItemComponent implements OnInit {

  @Input() selectedItem;
  private sub;
  item;

  constructor(private router: Router, private storeService: StoreService, private aRoute: ActivatedRoute) {
    // if (this.storeService.selectedItem) {
    //   this.item = this.storeService.selectedItem;
    // } else {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    
  //   this.sub = this.aRoute.params.subscribe(params => {
  //     this.item = params['item'];
  //     console.warn(params);
  //  });

   if (this.storeService.selectedItem) {
    this.item = this.storeService.selectedItem;
  } else {
    this.router.navigate(['/']);
  }
  }

}
