import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { Artepes } from '../interface/artepes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path = `${environment.API_URL}artes_pesca`;
  constructor(private http: HttpClient) { }

  agreArt(pesca: Artepes):Observable<Artepes>{
    return this.http.post<Artepes>(`${this.path}`, pesca)
  } 
  getArt(){
    return this.http.get(this.path);
  } 
  deleteA(id:any): Observable<any>{
    return this.http.delete<any>(`${this.path}/${id}`);
  }
  
  getIdArte(id:any):Observable<any>{
    return this.http.get<any>(this.path + '/' + id);  
  }

  editArte(id: any , put:  Artepes):Observable<Artepes>{
    let direccion = this.path+"/"+ id;
    return this.http.put<Artepes>(direccion, put)
  }
}
