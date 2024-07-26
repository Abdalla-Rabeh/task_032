import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/service/products.service';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent implements OnInit{
  items: any;
  id:any
  constructor(private route:ActivatedRoute, private service:ProductsService){
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)
  }
  ngOnInit(): void {
      this.getProductById()
  }
  getProductById(){
    this.service.getProductById(this.id).subscribe((res:any)=>{
      this.items = res
      console.log(res)
    })
  }
}
