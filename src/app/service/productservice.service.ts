import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  url = "http://localhost:3000/product";
  constructor( private http : HttpClient ) { }

  users(){
     return this.http.get(this.url);
  }
}
