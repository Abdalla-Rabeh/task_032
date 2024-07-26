import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getALl(){
   return this.http.get(`${environment.apiUrl}products`)
  }
  getAllByCategory(){
    return this.http.get(`${environment.apiUrl}products/categories`)
  }
  getFilterByCategory(v:any){
    return this.http.get(`${environment.apiUrl}products/category/${v}`)
    
  }
  getProductById(id:any){
    return this.http.get(`${environment.apiUrl}products/${id}`)
    
  }
}
