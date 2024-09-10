import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Item } from '../../models/item';
import { RouterModule } from '@angular/router';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-dairy',
  standalone: true,
  imports: [RouterModule, ItemComponent],
  templateUrl: './dairy.component.html',
  styleUrl: './dairy.component.scss'
})
export class DairyComponent {
  items:any;
  dairy: any;
  constructor(public storageService: LocalStorageService) { }

 ngOnInit(): void {
  this.items=this.storageService.getLocalStorage();
  this.filterDairy(this.items);
 }

  filterDairy(items: Item[]) {
   this.dairy= items.filter(item => item.type == 'dairy');
  }
}
