import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./../../services/products.service";
import { Product } from "./../../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: Product[] = [];

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProductsRequest().subscribe(response => this.productsList = response)
  }

}
