import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { IonicModule } from '@ionic/angular';
import { CabezaComponent } from '../components/cabeza/cabeza.component';
import { FiltroCategoriaComponent } from '../components/filtro-categoria/filtro-categoria.component';
import { ItemCartComponent } from '../components/item-cart/item-cart.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';



@NgModule({
  declarations: [CabezaComponent, ProductCardComponent, FiltroCategoriaComponent,ItemCartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule ,
    
    
  ],
  exports: [HttpClientModule, FormsModule, ProductCardComponent,IonicModule, CommonModule ,
     CabezaComponent, FiltroCategoriaComponent, ItemCartComponent, CheckoutComponent]
})
export class SharedModule { }
