import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Office } from '../interfaces/office';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path = `${environment.API_URL}oficinas`;

  constructor(private http: HttpClient) { }

  getOfi() {
    return this.http.get(this.path);
  }

  getIdOfi(id: any): Observable<any> {
    return this.http.get<any>(this.path + '/' + id);
  }

  agreOfi(ofi: Office): Observable<Office> {
    return this.http.post<Office>(`${this.path}`, ofi)
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.path}/${id}`);
  }

  editOfi(id: any, put: Office): Observable<Office> {
    let direccion = this.path+"/"+ id;
    return this.http.put<Office>(direccion, put)
  }


}
