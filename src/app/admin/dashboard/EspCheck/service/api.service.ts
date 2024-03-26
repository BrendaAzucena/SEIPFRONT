import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specie } from '../interface/specie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path = `${environment.API_URL}especies`;

  constructor(private http: HttpClient) { }
  
agreEsp(especie: Specie):Observable<Specie>{
  return this.http.post<Specie>(`${this.path}`, especie)
} 

delete(id:any): Observable<any>{
  return this.http.delete<any>(`${this.path}/${id}`);
}

getEspecie(){
  return this.http.get(this.path);
}

getIdEs(id:any):Observable<Specie>{
  return this.http.get<any>(this.path + '/' + id); 
}

editEsp(id: any ,put: Specie):Observable<Specie>{
  let direccion = this.path+"/"+ id;
    return this.http.put<Specie>(direccion, put)
}
}
