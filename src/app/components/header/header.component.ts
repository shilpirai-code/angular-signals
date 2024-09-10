import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartService } from '../../services/cart.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnChanges{
  
  public items: Item[]=[];
  private subscription!: Subscription;
  public cartCount : number = 0;
  constructor(public cartService: CartService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
   // this.cartCount=this.cartService.totalItem();
  }
  ngOnInit() {
    //this.cartCount=this.cartService.totalItem();
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   if(res!=null)
    //   this.cartCount = res.length;
    // });

    // this.subscription=this.cartService.cart.subscribe(results=>{
    //   this.cartCount=0;
    //   if(results!=null)
    //     {
    //       this.items=results;
    //       this.items.forEach((element: Item)=> {  
    //              this.cartCount++;
    //            });
    //     }
    // });
   }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
