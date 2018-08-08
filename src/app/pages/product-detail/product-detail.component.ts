import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;

  constructor(private _route: ActivatedRoute , private _productService: ProductService, private _router: Router ) { }

  ngOnInit() {
    this.getproductDetails(this._route.snapshot.params['id']);
  }

  getproductDetails(productId) {
    this._productService.getProductById(productId).subscribe(
      data => this.product = data,
      error => console.log(error)
    );
  }

  deleteproduct(productId) {
    this._productService.deleteProduct(productId).subscribe(
      res => this._router.navigate(['/products'])
    );
  }

}
