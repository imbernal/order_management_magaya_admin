import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
  FormControl
} from "@angular/forms";
import { OrderService } from "../../services/order.service";

@Component({
  selector: "app-order-edit",
  templateUrl: "./order-edit.component.html",
  styleUrls: ["./order-edit.component.css"]
})
export class OrderEditComponent implements OnInit {
  orderForm: FormGroup;
  id: String = "";
  payment_type: String[] = ["Cash", "Credit Card", "Check", "Other"];
  customer: any = [];
  public products: any;
  allProducts: any;
  myProducts: any;
  currentPaymentType: String;

  constructor(
    private _router: Router,
    private _orderService: OrderService,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getOrder(this._route.snapshot.params["id"]);
    this.orderForm = this._formBuilder.group({
      payment_type: [null, Validators.required],
      products: [null, Validators.required]
    });
  }

  getOrder(id) {
    this._orderService.getOrderById(id).subscribe(data => {
      this.id = data._id;
      this.allProducts = data.allProducts;
      this.customer = data.customer;
      this.myProducts = data.products;
      this.currentPaymentType = data.payment_type;
    });
  }

  onFormSubmit(form: NgForm) {
    this._orderService.updateOrder(form, this.id).subscribe(
      res => {
        this._router.navigate(["/order-details", res._id]);
      },
      err => {
        console.log(err);
      }
    );
  }

  autoSelectPayment(currentPayment, currentPaymentType) {
    return currentPayment === currentPaymentType;
  }

  autoSelectProduct(currentProductId, myProducts) {
    return currentProductId === myProducts;
  }

  orderDetails() {
    this._router.navigate(["/order-details", this.id]);
  }
}
