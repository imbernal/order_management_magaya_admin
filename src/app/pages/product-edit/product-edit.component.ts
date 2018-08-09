import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {


  productForm: FormGroup;
  id: String = '';
  description: String = '';
  price: Number = 0.0;
  weight: String = '';


  constructor(
    private _router: Router,
    private _productService: ProductService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct(this._route.snapshot.params['id']);
    this.productForm = this._formBuilder.group({
      description: [null, Validators.required],
      price: [null, Validators.required],
      weight: [null, Validators.required],
    });
  }

  getProduct(id) {
    this._productService.getProductById(id).subscribe(data => {
      this.id = data._id;
      this.productForm.setValue({
        description: data.description,
        price: data.price,
        weight: data.weight,
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this._productService.updateProduct(form, this.id)
      .subscribe(res => {
          this._router.navigate(['/product-details', res._id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  productDetails() {
    this._router.navigate(['/product-details', this.id]);
  }

}
