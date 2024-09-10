import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { RouterModule } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [RouterModule, ItemComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
  items:any;
  constructor(public storageService: LocalStorageService, private navbar: NavbarService) { }

 ngOnInit(): void {
  this.navbar.show();
  this.items=this.storageService.getLocalStorage();
 }
}
