import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  productos: any[] = [];
  params: any = { page: 0 };
 


  constructor(private productoService: ProductosService) { }

  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(event?: any) {
    this.params.page += 1;

    this.productoService.getproduct(this.params).subscribe({
      next: (response: any) => {
        this.productos = response; // Asegúrate de que `response` es un array
        console.log(this.productos);
      },
      error: (error: any) => {
        console.error("Error cargando productos:", error);
      }
    });
  }
  applyFilter(category: string) {
    console.log('Categoría seleccionada:', category);  // Para depuración
    if (category!== "") {
      this.productoService.getProductByCategory(category).subscribe({
        next: (rest: any) => {
          this.productos = rest;
        },
        error: (error: any) => { }
      })
    } else {
      this.getProducts()
    }
  
  
  }
 }
  


 