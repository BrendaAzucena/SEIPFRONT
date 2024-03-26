import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path = `${environment.API_URL}productos`;

    constructor(private http: HttpClient) { }

    agreProduc(producto: Product): Observable<Product> {
      return this.http.post<Product>(`${this.path}`, producto)
    }
    getProd() {
      return this.http.get(this.path);
    }
  
    deleteP(id:any): Observable<any>{
      return this.http.delete<any>(`${this.path}/${id}`);
    }
    
    getIdPro(id:any):Observable<any>{
      return this.http.get<any>(this.path + '/' + id);
    }
    
    editPro(id: any , put:  Product):Observable<Product>{
      let direccion = this.path+"/"+ id;
      return this.http.put<Product>(direccion, put)
    }

    getEspecie(){
      return this.http.get('http://localhost:8000/api/especies');
    }
}
