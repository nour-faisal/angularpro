import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  

 dataPro=[];
 newField = {};
  constructor(private data:DataServiceService) { }

  ngOnInit() {
    console.log(this.data.dataitem)
  }
  btnAddPro(){
    this.dataPro.push(this.newField);
    this.newField ={};
    
  }
  // clickEnter(e){
  //   console.log(this.dataList.push({name:e.value}));
  
  // }
  
  // btnAdd(){
    
  //   this.count ++;
  //   this.data.push({id:this.count,name:`test`+this.count});
    
  // }
  // btnClick(){
  //   this.isActive = !this.isActive;
    
  // }
  // printData(e){
  //   console.log('this key up',e.target.value);
  // }


}
