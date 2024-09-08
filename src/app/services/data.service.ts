import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  url: string ='/assets/json/item.json';

  constructor(private http: HttpClient) { }

  // Get data from service
  getData(): Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
}
}
