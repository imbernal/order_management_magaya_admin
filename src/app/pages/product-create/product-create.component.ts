import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;
  description: String = '';
  price: Number = 0.0;
  weight: String = '';

  constructor(
    private _router: Router,
    private _productService: ProductService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.productForm = this._formBuilder.group({
      description: [null, Validators.required],
      price: [null, Validators.required],
      weight: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this._productService.saveProduct(form).subscribe(
      res => {
        const id = res.product._id;
        this._router.navigate(['/product-details', id]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
