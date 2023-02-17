import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlApi = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.urlApi}/products`)
  }

  getProduct(id: any): Observable<any> {
    return this.http.get(`${this.urlApi}/product/${id}`)
  }

  saveProduct(product: any): Observable<any> {
    return this.http.post(`${this.urlApi}/product`, product)
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put(`${this.urlApi}/product/${product.id}`, product)
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.urlApi}/product/${id}`)
  }

}
