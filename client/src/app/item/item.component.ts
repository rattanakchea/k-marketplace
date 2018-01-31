import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreService } from '../services/store.service';

// single product item
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Input() item;

  constructor(private router: Router, private storeService: StoreService) { }

  ngOnInit() {
  }

  viewItemDetail(item) {
    console.log('view item detail', item);
    this.storeService.selectedItem = item;
    this.router.navigate(['/view/' + item._id]);
  }

}
