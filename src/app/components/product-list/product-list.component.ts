import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // Html'de ne göstereceğim????
  // Datayı modelle
  products:Product[]=[];
  productAddedToBasket:boolean=false;

  constructor(private productService:ProductService, private basketService:BasketService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  // rxjs
  getProducts(){
    // subscribe asenkron çalışır
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data;
    })
  }

  addToCart(product:Product){
    this.productAddedToBasket=false;
    console.log(product);
    this.basketService.add({productId:product.id, userId:1, count:1, id:0}).subscribe(response=>{
      // notification service
      this.productAddedToBasket=true;
    });
  }

}
