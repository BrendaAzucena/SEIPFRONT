import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Permiso } from '../interfaces/permiso';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = `${environment.API_URL}permisos_pesca`;

  constructor(private http: HttpClient) { }

  getPermiso() {
    return this.http.get(this.path);
  }

  getEspecies() {
    return this.http.get('http://localhost:8000/api/especies');
  }

  getId(id: any): Observable<any> {
    return this.http.get<any>(this.path + '/' + id);
  }

  agregar(per: Permiso): Observable<Permiso> {
    return this.http.post<Permiso>(`${this.path}`, per)
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.path}/${id}`);
  }

  editar(id: any, put: Permiso): Observable<Permiso> {
    let direccion = this.path+"/"+ id;
    return this.http.put<Permiso>(direccion, put)
  }


}
