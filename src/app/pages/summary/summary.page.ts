import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'; 
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
  standalone: false,
})
export class SummaryPage implements OnInit {
  cart: any[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private navCtrl: NavController,
    private router: Router 
  ) {}

  ngOnInit() {
    this.cart = this.cartService.getcart();
    this.updateTotalPrice();
    console.log(this.cart);
  }

  updateTotalPrice() {
    this.total = 0;
    this.cart.forEach((product) => {
      this.total += product.price * product.quantity;
    });
  }

  increaseQuantity(id: any) {
    this.cart = this.cartService.increaseQuantity(id);
    this.updateTotalPrice();
  }

  decreaseQuantity(id: any) {
    this.cart = this.cartService.decreaseQuantity(id);
    this.updateTotalPrice();
  }

  checkOut() {
    this.router.navigate(['/checkout'], {
      state: { total: this.total }, 
    });
  }

  removeFromCart(id: any) {
    this.cart = this.cartService.removeFromCart(id);
    this.updateTotalPrice();
  }
}