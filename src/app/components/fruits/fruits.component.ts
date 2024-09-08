import { Component, Input, OnInit, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemComponent } from "../item/item.component";
import { LocalStorageService } from '../../services/local-storage.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [RouterModule, ItemComponent],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss'
})
export class FruitsComponent implements OnInit {
  items:any;
  fruits: any;
  constructor(public storageService: LocalStorageService) { }

 ngOnInit(): void {
  this.items=this.storageService.getLocalStorage();
  this.filterFruits(this.items);
 }

  filterFruits(items: Item[]) {
   this.fruits= items.filter(item => item.type == 'fruit');
  }
  
}
