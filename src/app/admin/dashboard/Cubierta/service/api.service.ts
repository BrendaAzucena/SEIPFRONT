import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cubierta } from '../interface/Cubierta';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = `${environment.API_URL}tipos_cubierta`;

  constructor(private http: HttpClient) { }

  getCu() {
    return this.http.get(this.path);
  }

  getId(id: any): Observable<any> {
    return this.http.get<any>(this.path + '/' + id);
  }

  agregar(cub: Cubierta): Observable<Cubierta> {
    return this.http.post<Cubierta>(`${this.path}`, cub)
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.path}/${id}`);
  }

  editar(id: any, put: Cubierta): Observable<Cubierta> {
    let direccion = this.path+"/"+ id;
    return this.http.put<Cubierta>(direccion, put)
  }
}
