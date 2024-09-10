import { Routes } from '@angular/router';
import { FruitsComponent } from './components/fruits/fruits.component';
import { VegitablesComponent } from './components/vegitables/vegitables.component';
import { CartComponent } from './components/cart/cart.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { DairyComponent } from './components/dairy/dairy.component';

export const routes: Routes = [
    { path: '', component: AllProductsComponent, pathMatch:'full' },
    { path: 'fruits', component: FruitsComponent },
    { path: 'vegitables', component: VegitablesComponent },
    { path: 'dairy', component: DairyComponent },
    { path: 'cart', component: CartComponent },
    
];
