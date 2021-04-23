import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44314/api/products/"
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newUrl = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newUrl = this.apiUrl + "getbycategory?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newUrl);
  }


  add(product:Product):Observable<ResponseModel>{
    let newUrl = this.apiUrl + "add" ;
    return this.httpClient.post<ResponseModel>(newUrl, product);
  }
}
