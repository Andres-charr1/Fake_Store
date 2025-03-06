import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  total: number = 0;


  constructor() {}

  setTotal(total: number): void {
    this.total = total;
  }

  getTotal(): number {
    return this.total;
  }
  
  getcart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  addToCart(product: any) {
    let cart = this.getcart();
    let item = cart.find((item: any) => item.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', cart.length.toString());
  }

  getQuantity() {
    return localStorage.getItem('total') || '0';
  }

    decreaseQuantity(id: any): any[] {
    let cart = this.getcart();
    let item = cart.find((item: any) => item.id === id);
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      //Eliminar del storage
      cart = cart.filter((item: any) => item.id !== id);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', cart.length.toString());
    return cart;
  }

  increaseQuantity(id: any): any[] {
    let cart = this.getcart();
    let item = cart.find((item: any) => item.id === id);
    item.quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
  }

  //producto eliminado
  removeFromCart(id: any): any[] {
    let cart = this.getcart();
    cart = cart.filter((item: any) => item.id !== id); 
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', cart.length.toString());
    return cart;
  }
}
