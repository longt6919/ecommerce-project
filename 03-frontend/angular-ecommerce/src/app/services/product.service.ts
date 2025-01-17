import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import{ map } from 'rxjs/operators'
import { ProductCategory } from '../common/product-category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl="http://localhost:8080/api/products";
  //private baseUrl="http://localhost:8080/api/products?size=100"; fill all data
private categoryUrl='http://localhost:8080/api/product-category';
  constructor(private httpClient: HttpClient) { }


  getProductList(theCategoryId: number): Observable<Product[]>{
    const searchUrl =`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;
    return this.getProducts(searchUrl);
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response =>response._embedded.productCategory)
    );
  }

  searchProducts(theKeyword: string): Observable<Product[]>  {
    const searchUrl =`${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.getProducts(searchUrl);  
  }
  getProduct(theProductId: number): Observable<Product> {
const productUrl =`${this.baseUrl}/${theProductId}`;
return this.httpClient.get<Product>(productUrl);
  }


  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

interface GetResponseProducts{
  _embedded:{
    products: Product[];
  }
}
interface GetResponseProductCategory{
  _embedded:{
    productCategory: ProductCategory[];
  }
}
