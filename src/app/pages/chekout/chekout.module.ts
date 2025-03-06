import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 
import { ChekoutPage } from './chekout.page'; 
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChekoutPage], 
  imports: [
    CommonModule,
    IonicModule, 
    RouterModule.forChild([
      {
        path: '',
        component: ChekoutPage, 
      },
    ]),
  ],
})
export class ChekoutPageModule {} 