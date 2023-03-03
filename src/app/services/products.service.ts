import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  getProductsRequest() {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }
}
