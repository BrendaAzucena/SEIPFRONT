import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../interface/region';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path = `${environment.API_URL}regiones`;

  constructor(private http: HttpClient) { }

  getRegiones() {
    return this.http.get(this.path);
  }

  agrerRegion(region: Region): Observable<Region> {
    return this.http.post<Region>(`${this.path}`, region)
  }
  deleteR(id: any): Observable<any> {
    return this.http.delete<any>(`${this.path}/${id}`);
  }

  getIdRegion(id: any): Observable<any> {
    return this.http.get<any>(this.path + '/' + id);
  }

  editRegion(id: any, put: Region): Observable<Region> {
    let direccion = this.path + "/" + id;
    return this.http.put<Region>(direccion, put)
  }
}
