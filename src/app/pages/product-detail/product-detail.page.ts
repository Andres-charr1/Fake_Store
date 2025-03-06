import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: false
})
export class ProductDetailPage implements OnInit {

  detailID: string = '';
  detail: any = {} as any;
  

  constructor(
    private actRoute: ActivatedRoute,  // Faltaba agregar esto
    private productoSVS: ProductosService,
    private cartService: CartService
  ) { 
    this.detailID = this.actRoute.snapshot.paramMap.get('id') as string;
  }

  ngOnInit() {
    this.getProducto();
  }

  getProducto() {
    this.productoSVS.getProductoById(this.detailID).subscribe({
      next: (res: any) => {
        this.detail = res;
        console.log(this.detail);
      },
      error: (err: any) => {
        console.error("Error obteniendo detalles:", err);
      }
    });
    const productData = history.state.product; // Recibe el producto desde la home
    if (productData) {
      this.detail = productData;
    }
  }

  addToCart(detail:any) {
    this.cartService.addToCart(detail);
  }
}
 
