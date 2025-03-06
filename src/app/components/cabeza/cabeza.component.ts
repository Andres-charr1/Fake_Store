import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.scss'],
  standalone : false,
  
})
export class CabezaComponent  implements OnInit {

  @Input() cartCount: number = 0;

  verCarrito() {
    console.log("Ir al carrito");
  }

  constructor(private navCtrl: NavController) { }
  ngOnInit(): void {
   
  }

  goToSummary() {
    this.navCtrl.navigateForward('/summary');

  }
}

