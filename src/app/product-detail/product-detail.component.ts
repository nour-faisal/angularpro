import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductItemService} from '../product-item.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  
})
export class ProductDetailComponent implements OnInit {
  proItemsDetails = [];
  
  public porId ;
  constructor(private route:ActivatedRoute, private proServiceDetails:ProductItemService) { }
 
  ngOnInit() {
    this.proItemsDetails =this.proServiceDetails.getPro();
    let id= parseInt(this.route.snapshot.paramMap.get('title'));
    this.porId = id;

  }

}
