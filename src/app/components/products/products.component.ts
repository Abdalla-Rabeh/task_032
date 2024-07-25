import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  Products:any = []
  constructor(private service:ProductsService){

  }
  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts(){
    this.service.getALl().subscribe((res:any) =>{
      
      this.Products = res
    })
  }

  
}
