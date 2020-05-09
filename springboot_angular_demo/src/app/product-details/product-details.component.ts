import {Component, OnInit} from '@angular/core';
import {products} from '../products';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']

})
export class ProductDetailsComponent implements OnInit{
  product;


  constructor(
    private route:ActivatedRoute,
    private cartService:CartService //类似 private UserService userService
  ) {

  }


  ngOnInit(): void {
      this.route.paramMap.subscribe()
        this.route.paramMap.subscribe(params =>{
      this.product = products[+params.get('productId')];
    });

  }


  addToCart(pro){
    window.alert('你已经添加到购物车!');
    this.cartService.addToCart(pro);
  }




















}















