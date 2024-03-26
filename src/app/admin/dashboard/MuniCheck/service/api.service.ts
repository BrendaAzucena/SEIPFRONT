import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Municipio } from '../interface/municipio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path = `${environment.API_URL}municipios`;

  constructor(private http: HttpClient) { }

  getMunicipios() {
    return this.http.get(this.path);
  }
  agreMunicipio(municipio: Municipio): Observable<Municipio> {
    return this.http.post<Municipio>(`${this.path}`, municipio)
  }

  deleteM(id: any): Observable<any> {
    return this.http.delete<any>(`${this.path}/${id}`);
  }

  getIdMuni(id: any): Observable<any> {
    return this.http.get<any>(this.path + '/' + id);
  }

  editMuni(id: any, put: Municipio): Observable<Municipio> {
    let direccion = this.path + "/" + id;
    return this.http.put<Municipio>(direccion, put)
  }

  getRegiones() {
    return this.http.get('http://localhost:8000/api/regiones');
  }

  getDistritos() {
    return this.http.get('http://localhost:8000/api/distritos');
  }
}
