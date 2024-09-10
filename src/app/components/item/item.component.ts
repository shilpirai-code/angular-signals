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
  
  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  addToCart(product: Item){
    this.cartService.addtoCartSignal(product);
  }

}


