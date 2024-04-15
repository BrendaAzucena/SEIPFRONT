import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Uniconomicafisica } from '../interface/uniconomicafisica';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  path = `${environment.API_URL}unidades_economicas_pa_fisico`;

  constructor(private http: HttpClient) { }

  getRegiones(){
    return this.http.get('http://localhost:8000/api/regiones');
  }

  getMunicipios(){
    return this.http.get('http://localhost:8000/api/municipios');
  }

  getLocalidades(){
    return this.http.get('http://localhost:8000/api/localidades');
  }

  getOfi(){
    return this.http.get('http://localhost:8000/api/oficinas');
  }
  
  agreUni(uni: Uniconomicafisica): Observable<Uniconomicafisica> {
    return this.http.post<Uniconomicafisica>(`${this.path}`, uni)
  }


  editUnidadF(id: any, put: Uniconomicafisica): Observable<Uniconomicafisica> {
    let direccion = this.path + "/" + id;
    return this.http.put<Uniconomicafisica>(direccion, put)
  }

  getIdUnidadF(id: any): Observable<Uniconomicafisica> {
    return this.http.get<Uniconomicafisica>(this.path + '/' + id);
  }
}
