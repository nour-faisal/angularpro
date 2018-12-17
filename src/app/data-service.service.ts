import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  dataitem = [{"id":1,"name":"apple","price":1000},{
    "id":1,"name":"apple","price":1000},
    {"id":2,"name":"nokia","price":700},
    {"id":3,"name":"samsung","price":500},
    {"id":4,"name":"apple1","price":600},
    {"id":5,"name":"apple2","price":800},
    {"id":6,"name":"apple3","price":700},
    {"id":7,"name":"apple4","price":400},
    {"id":8,"name":"apple5","price":600},
    {"id":9,"name":"apple6","price":1000},
    {"id":10,"name":"apple6","price":1000},
  
  ]
}
