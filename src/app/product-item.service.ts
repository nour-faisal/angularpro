import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {
  

  constructor() { }
  getPro(){
    return [{"id":1 , "title": "tittle one", "description ": "this is description for title one "},
  {"id":2 , "title": "tittle Two","description ": "this is description for title one this is description for title one this is description for title one this is description for title one "
  },
  {"id":3 , "title": "tittle Three","description ": "this is description for title one this is description for title one this is description for title one this is description for title one "
  },
  {"id":4 , "title": "tittle Four","description ": "this is description for title one this is description for title one this is description for title one this is description for title one "
  }]
  }
  
}
