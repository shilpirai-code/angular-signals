import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { LocalStorageService } from '../../services/local-storage.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-vegitables',
  standalone: true,
  imports:  [RouterModule, ItemComponent],
  templateUrl: './vegitables.component.html',
  styleUrl: './vegitables.component.scss'
})
export class VegitablesComponent implements OnInit {
  items:any;
  vegetables:any;

  constructor(private storageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.items=this.storageService.getLocalStorage();
    this.filterVegetables(this.items);
   }

  filterVegetables(items: Item[]) {
    this.vegetables = items.filter(e => e.type == 'vegetable');
  }


}
