import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(data){
    console.warn('您的订单已提交',data);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
























}







