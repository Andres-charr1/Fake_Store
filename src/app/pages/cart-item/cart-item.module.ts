import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartItemPageRoutingModule } from './cart-item-routing.module';

import { CartItemPage } from './cart-item.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    
    CartItemPageRoutingModule,
    SharedModule
  ],
  declarations: [CartItemPage]
})
export class CartItemPageModule {}
