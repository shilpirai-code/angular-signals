import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  url: string ='/assets/json/item.json';
  public products
  public products$
  constructor(private http: HttpClient) { 
    this.products = toSignal<Item[]>(this.http.get<Item[]>(this.url));
    this.products$ = toObservable(this.products);
  }

  // Get data from service
  getData(): Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
}

}
