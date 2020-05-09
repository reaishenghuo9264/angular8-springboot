import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];



  constructor(
    private http: HttpClient
  ) {

  }

  addToCart(product){ //方法会将产品附加到 items 数组中。
    this.items.push(product)
  }

  getItems(){ //方法会收集用户加到购物车中的商品，并返回每个商品及其数量。
    return this.items;
  }

  clearCart(){//方法返回一个空数组。
    this.items = []
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }













}















