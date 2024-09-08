import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { LocalStorageService } from './services/local-storage.service';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'grocery-delivery';
  subscription!: Subscription;
  items!: Item[];

  constructor(private dataService: DataService, private storageService: LocalStorageService) {
  }

  // subscribe to data service and set inital data in local storage
  ngOnInit(): void {
    this.dataService.getData().subscribe(results=>{
      this.items = results;
      this.items.forEach((a:any) => {
        Object.assign(a,{quantity:0,total:a.price});
      });
      console.log(this.items);
     this.storageService.setLocalStorage(this.items);
     });  
  }
 
}
