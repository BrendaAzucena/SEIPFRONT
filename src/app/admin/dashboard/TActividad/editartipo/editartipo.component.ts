import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoActividad } from '../interface/TipoActividad';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editartipo',
  templateUrl: './editartipo.component.html',
  styleUrl: './editartipo.component.css'
})
export class EditartipoComponent implements OnInit {
  FormActividad: FormGroup;
  idActividad: any;
  especie: any[] = [];
  @Input() datoActividad: TipoActividad = { id:'',NombreActividad: '' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idActividad = this.activate.snapshot.paramMap.get('id');
    this.api.getId(this.idActividad).subscribe(datoActividad =>{
      console.log(datoActividad);
      this.FormActividad.setValue({
        id: datoActividad[0]['id'],
        NombreActividad: datoActividad[0]['NombreActividad']
      }
      );
    }
    );
    this.FormActividad=this.formulario.group({
      id: [''],
      NombreActividad: ['']
      });
  }
  
  ngOnInit(): void {
   this.showPermiso();
  }

 showPermiso(){
  this.api.getId(this.activate.snapshot.params['id']).subscribe((response: any) => { 
    this.datoActividad = response.data;
    console.log(response);
  });
 }
   

put(): any {
  this.api.editAct(this.idActividad, this.FormActividad.value).subscribe(datos => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se edito correctamente",
      showConfirmButton: false,
      timer: 1500
    });

    this.router.navigateByUrl('TipoActividad');
    });
  };
}