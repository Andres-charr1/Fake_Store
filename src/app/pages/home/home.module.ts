import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltroCategoriaComponent } from "../../components/filtro-categoria/filtro-categoria.component";

@NgModule({
  imports: [
    HomePageRoutingModule,
    SharedModule,
    
],
  declarations: [HomePage]
})
export class HomePageModule {}
