import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ProductService } from '../../services/product.service';







export class ProductComponent implements OnInit {

  products: any;
  displayedColumns = ['description', 'price', 'weight' , 'order'];
  dataSource = new OrderDataSource(this._productService);

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      data => this.products = data,
      error => console.log(error)
    );
  }
}

export class OrderDataSource extends DataSource<any> {

  constructor(private _productService) {
    super();
  }

  connect() {
    return this._productService.getProducts();
  }

  disconnect() {}

}
