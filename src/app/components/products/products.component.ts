import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  Products: any = [];
  Categorys: any = [];
  Card: any = [];
  quantity: Number = 1;
  addCard: { [key: number]: boolean } = {};

  toggleQuantityInput(productId: number) {
    this.addCard[productId] = !this.addCard[productId];
  }
  constructor(private service: ProductsService) {}
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }
  getAllProducts() {
    this.service.getALl().subscribe((res: any) => {
      this.Products = res;
    });
  }
  getAllCategory() {
    this.service.getAllByCategory().subscribe((res: any) => {
      console.log(res);
      this.Categorys = res;
    });
  }
  filterByCategory(e: any): void {
    let value = e.target.value;
    if (value == 'All') {
      this.getAllProducts();
    } else {
      this.getFilterCategory(value);
    }
  }
  getFilterCategory(v: String) {
    this.service.getFilterByCategory(v).subscribe((res: any) => {
      this.Products = res;
    });
  }
  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.Card = JSON.parse(localStorage.getItem('cart')!);
      let exists = this.Card.find((item: any) => item.product.id == event.id);
      if (exists) {
        alert('This product is already in the cart');
      } else {
        this.Card.push({
          product: event,
          quantity: this.quantity,
        });
        localStorage.setItem('cart', JSON.stringify(this.Card));
      }
    } else {
      this.Card.push({
        product: event,
        quantity: this.quantity,
      });
      localStorage.setItem('cart', JSON.stringify(this.Card));
    }
    setTimeout(() => {
      this.addCard = {}
    }, 3000);
  }
}
