
import { Component } from '@angular/core';

import { products } from '../products';






@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(){
    window.alert('产品已共享');
  }

  //点击事件
  onNotify(){
    window.alert('产品上市通知');
  }



}







