import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, OnInit, output, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-filtro-categoria',
  templateUrl: './filtro-categoria.component.html',
  styleUrls: ['./filtro-categoria.component.scss'],
  standalone : false,
  
})
export class FiltroCategoriaComponent  implements OnInit {
  
  @Output() categorySelected = new EventEmitter<string>();

  category = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
  


  constructor() { }

  ngOnInit() {}

}

