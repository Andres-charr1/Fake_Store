import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChekoutPage } from './chekout.page';

describe('ChekoutPage', () => {
  let component: ChekoutPage;
  let fixture: ComponentFixture<ChekoutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChekoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
