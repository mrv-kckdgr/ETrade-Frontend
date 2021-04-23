import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket } from '../models/basket';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  apiUrl = "https://localhost:44314/api/baskets/"

  constructor(private httpClient:HttpClient) { }

  add(basket:Basket):Observable<ResponseModel>{
    let newUrl = this.apiUrl + "add";
    return this.httpClient.post<ResponseModel>(newUrl, basket);
  }

  get():Observable<ListResponseModel<Basket>>{
    let newUrl = this.apiUrl + "getbasket";
    return this.httpClient.get<ListResponseModel<Basket>>(newUrl);
  }
}
