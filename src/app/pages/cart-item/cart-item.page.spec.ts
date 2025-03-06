import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartItemPage } from './cart-item.page';

describe('CartItemPage', () => {
  let component: CartItemPage;
  let fixture: ComponentFixture<CartItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
