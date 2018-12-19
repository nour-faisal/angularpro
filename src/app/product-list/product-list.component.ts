import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductItemService} from '../product-item.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  proItems = [];
  constructor(private router: Router,private proService: ProductItemService) { }

  ngOnInit() {
    this.proItems = this.proService.getPro();
  }
  onSelect(item){
    this.router.navigate(['/product',item.id]);
  }

}
