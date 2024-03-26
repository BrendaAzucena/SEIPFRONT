import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent implements OnInit {
  FormDistrito:FormGroup;
  data:  any[]=[];
  datos:  any[]=[];
  constructor(private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormDistrito=this.formulario.group({
    NombreDistrito: ['',Validators.required],
    Regid: ['',Validators.required],
     });
     console.log(this.FormDistrito);
}
  
  ngOnInit(): void {
  
   this.distritos();
   this.region();
  }

  distritos(){
    this.api.getDistrictos().subscribe((response: any ) => { 
      this.datos = response.data;
    console.log(response);
    })
  }
  region(){
    this.api.getRegiones().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }
  
  enviar(): any {
    console.log(this.FormDistrito.value);
    this.api.agreDistrito(this.FormDistrito.value).subscribe(() => {
      this.router.navigateByUrl('district', { skipLocationChange: true }).then(() => {
        this.router.navigate(['district']);
        window.location.reload();
     });
     
    });
  }
 

editar(id = []){
  this.router.navigate(['update-district', id]);
  }

  
  borrar(id: any, iControl: any) {
    this.api.deleteDis(id).subscribe(
      () => {
        this.data.splice(iControl, 1);
      },
      (error) => {
        console.log('Error al eliminar:', error);
      }
    );
  }
  cancelar() {
    this.router.navigateByUrl('panel');
  }

  
}



