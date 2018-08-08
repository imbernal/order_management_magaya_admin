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
      weight: [null, [Validators.required, Validators.email]],
    });
  }

  getProduct(id) {
    this._productService.getProductById(id).subscribe(data => {
      this.id = data._id;
      this.productForm.setValue({
        description: data.name,
        price: data.phone,
        weight: data.email,
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this._productService.updateProduct(form)
      .subscribe(res => {
          const id = res['_id'];
          this._router.navigate(['/product-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  productDetails() {
    this._router.navigate(['/product-details', this.id]);
  }

}
