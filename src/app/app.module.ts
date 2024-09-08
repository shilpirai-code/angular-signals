import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FruitsComponent } from './components/fruits/fruits.component';
import { HeaderComponent } from './components/header/header.component';
import { VegitablesComponent } from './components/vegitables/vegitables.component';
import { NavbarService } from './services/navbar.service';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FruitsComponent, 
    VegitablesComponent,
    CartComponent
  ],
  declarations: [],
  providers: [
    NavbarService  
]
})
export class AppModule { }
