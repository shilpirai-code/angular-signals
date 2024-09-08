import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { CartService } from '../../services/cart.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})

export class ItemComponent {

  @Input() items!: Item[] | null;
  total!: any;
  
  constructor(private storageService: LocalStorageService, private cartService: CartService) {
  }

  addItem(item: Item, index:number) {
    item.quantity++;
    this.updateLocalStorage(item);
    this.cartService.addToCart(item,index);
  }

  removeItem(item: Item){
    if (item.quantity > 0)
      item.quantity--;
    this.updateLocalStorage(item);
    this.cartService.removeFromCart(item);
  }

  updateLocalStorage(item: Item){
    let localItems= this.storageService.getLocalStorage();
    localItems.forEach((element:Item) => {
    if(element.name==item.name){
      element.quantity=item.quantity;
      // Save the new item with updated value
      localStorage.setItem("localCarts",JSON.stringify(localItems));
    }
  });
  }  

}


