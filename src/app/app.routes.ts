import { Routes } from '@angular/router';
import { FruitsComponent } from './components/fruits/fruits.component';
import { VegitablesComponent } from './components/vegitables/vegitables.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '', component: FruitsComponent, pathMatch:'full' },
    { path: 'vegitables', component: VegitablesComponent },
    { path: 'cart', component: CartComponent }
];
