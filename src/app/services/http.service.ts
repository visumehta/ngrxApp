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

  getProductDetails(productId: number): Observable<ProductsModel> {
    return this.http.get(`${this.productUrl}/${productId}`);
  }

  updateProduct(productId: number, change: ProductsModel) {
    return this.http.patch(`${this.productUrl}/${productId}`, change).pipe(map((res: any) => {
      console.log('res', res);
      return res;
    }))
  }
 }
