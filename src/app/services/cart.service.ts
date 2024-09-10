import { Injectable, computed, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public _cart = new BehaviorSubject<Item[]|null>(null);
  //cart = this._cart.asObservable();
  public cart = signal<Item[]>([]);
  public totalItem = computed(()=>this.cart().length);
  public subTotal = computed(() => this.cart().reduce((prev: any, curr: Item) => {
    return prev + curr.price;
  }, 0));
  public items: Item[]=[];

  constructor(private dataService: DataService) { }

  // Add item to Cart
  addToCart(product: Item,index:number) { 
    this.items.push(product);
    this._cart.next(this.items);
    this.getTotalPrice();
  }

  // add item to cart using signal
  addtoCartSignal(product: Item){
     this.cart.update((val: Item[]) => {
      return [...val, product]
    });

    // this.dataService.products()?.forEach((data:Item) => {
    //   if (data.id === data.id) {
    //     data.quantity = data.quantity - 1;
    //   }
    // })
  }

  // Remove item from Cart
  removeFromCart(item: Item) {
   this.items.splice(this.items.indexOf(item), 1);
   this._cart.next(this.items);
  }

  // Remove item from cart using signal
  removeFromCartSignal(id: number){
    this.cart.update(val => {
      const product = val.splice(id, 1);
      // this.dataService.products()?.forEach(a => {
      //   if (a.id === product[0].id) {
      //     a.quantity = a.quantity + 1;
      //   }
      // });
      return val;
    });
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
