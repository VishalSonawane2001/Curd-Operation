import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  private baseUrl = 'http://localhost:8181';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/prod`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/prod`, product)
  }

  deleteProduct(pid: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/prod/${pid}`);
  }
  getProductById(pid: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/prod/${pid}`);
  }

  UpdateProduct(pid: number, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/prod/${pid}`, product);
  }
}
