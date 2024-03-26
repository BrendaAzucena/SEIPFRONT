import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { District } from '../interface/district';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path = `${environment.API_URL}distritos`;

  constructor(private http: HttpClient) { }

  getDistrictos() {
    return this.http.get(this.path);
  }

  agreDistrito(distrito: District): Observable<District> {
    return this.http.post<District>(`${this.path}`, distrito)
  }

  deleteDis(id: any): Observable<any> {
    return this.http.delete<any>(`${this.path}/${id}`);
  }

  getIdDis(id: any): Observable<any> {
    return this.http.get<any>(this.path + '/' + id);  
  }

  editDis(id: any, put: District): Observable<District> {
    let direccion = this.path+"/"+ id;
    return this.http.put<District>(direccion, put)
  }

  getRegiones(){
    return this.http.get('http://localhost:8000/api/regiones');
  }
}
