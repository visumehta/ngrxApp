import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductsModel } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  productUrl: string = 'http://localhost:3000/products';
  http = inject(HttpClient);

  getAllProducts(): Observable<ProductsModel[]> {
    return this.http.get<ProductsModel[]>(this.productUrl);
  }

  getProductDetails(productId: number) {
    return this.http.get(`${this.productUrl}/${productId}`).pipe(map((res: any) => {
      return res;
    }))
  }
 }
