import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  _cart = new BehaviorSubject<Item[]|null>(null);
  cart = this._cart.asObservable();
  items: Item[]=[];
  newItem: boolean=true;
  constructor() { }

  // Add item to Cart
  addToCart(product: Item,index:number) { 
    this.items.push(product);
    this._cart.next(this.items);
    this.getTotalPrice();
    console.log(this.items);
  }

  // Remove item from Cart
  removeFromCart(item: Item) {
   this.items.splice(this.items.indexOf(item), 1);
   this._cart.next(this.items);
  }

  // Clear Cart
  removeAllCart(){
    this.items = []
    this._cart.next(this.items);
  }

  // Get total price
  getTotalPrice() : number{
    let grandTotal = 0;
    this.items.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  getProducts(){
    return this.cart;
  }

  setProduct(product : any){
    this.items.push(...product);
    this._cart.next(product);
  }

  
}
