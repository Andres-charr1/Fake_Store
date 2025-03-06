import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importar ActivatedRoute
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-chekout',
  templateUrl: './chekout.page.html',
  styleUrls: ['./chekout.page.scss'],
})
export class ChekoutPage implements OnInit {
  total: number = 0; 

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {} 

  ngOnInit() {
    
    this.route.paramMap.subscribe((params) => {
      const state = history.state; 
      if (state && state['total']) {
        this.total = state['total'];
      }
      console.log('Total recuperado:', this.total);
    });
  }

  goBack() {
    this.navCtrl.back(); 
  }
}