import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { CommonModule, Location } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Item } from '../../models/item';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
 
  public products : any = [];
  public grandTotal !: number;

  constructor(private navbar: NavbarService, private _location: Location, private cartService: CartService){}

  ngOnInit(): void {
    this.navbar.hide();
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.formatCart();
    })
  }

  removeItem(item: any){
    this.cartService.removeFromCart(item);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  backClick(): void {
    this.navbar.show();
    this._location.back();
  }

  formatCart() {
    this.products=[...new Set(this.products)];
  }

  findDuplicates() {
     const newArr: any[] = [];
    this.products.forEach((item: Item) => {
        if (this.products.filter((i: Item) => i.id === item.id).length > 1) {
            //item.isDuplicate = true;
            
        } else {
           // item.isDuplicate = false;
        }
        newArr.push(item);
    });
    this.products = newArr;
}
}
