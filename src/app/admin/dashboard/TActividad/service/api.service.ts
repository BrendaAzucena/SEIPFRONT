import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoActividad } from '../interface/TipoActividad';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = `${environment.API_URL}tipos_actividad`;

  constructor(private http: HttpClient) { }

  getAct() {
    return this.http.get(this.path);
  }

  getId(id: any): Observable<any> {
    return this.http.get<any>(this.path + '/' + id);
  }

  agreAct(act: TipoActividad): Observable<TipoActividad> {
    return this.http.post<TipoActividad>(`${this.path}`, act)
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.path}/${id}`);
  }

  editAct(id: any, put: TipoActividad): Observable<TipoActividad> {
    let direccion = this.path+"/"+ id;
    return this.http.put<TipoActividad>(direccion, put)
  }
}
