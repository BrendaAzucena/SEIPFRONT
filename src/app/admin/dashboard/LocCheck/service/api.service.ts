import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Localidad } from '../interface/localidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path = `${environment.API_URL}localidades`;

  constructor(private http: HttpClient) { }

  getLocalidades() {
    return this.http.get(this.path);
  }

  agreLocalidad(localidad: Localidad): Observable<Localidad> {
    return this.http.post<Localidad>(`${this.path}`, localidad)
  }

  deleteL(id: any): Observable<any> {
    return this.http.delete<any>(`${this.path}/${id}`);
  }

  getIdLocalidad(id: any): Observable<any> {
    return this.http.get<any>(this.path + '/' + id);
  }

  editLocalidad(id: any, put: Localidad): Observable<Localidad> {
    let direccion = this.path + "/" + id;
    return this.http.put<Localidad>(direccion, put)
  }

  getRegiones() {
    return this.http.get('http://localhost:8000/api/regiones');
  }

  getMunicipios() {
    return this.http.get('http://localhost:8000/api/municipios');
  }

  getDistritos() {
    return this.http.get('http://localhost:8000/api/distritos');
  }
}
