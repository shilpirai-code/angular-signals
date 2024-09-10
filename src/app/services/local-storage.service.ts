import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Save items in local storage 
  setLocalStorage(items: any){
    const carItemsString:string = JSON.stringify(items);
    localStorage.setItem('localCarts', carItemsString);
 }

 // Get items from local storage 
  getLocalStorage(){
    let carts = [];
    if(localStorage.getItem('localCarts') !=null){
        const carItemsString= localStorage.getItem('localCarts');
        if(carItemsString!=null)
          carts = JSON.parse(carItemsString);
   }
   return carts;
  }  
  
  // Clear items from local storage
  clearLocalStorage(){
    localStorage.removeItem('localCarts');
  }
}
