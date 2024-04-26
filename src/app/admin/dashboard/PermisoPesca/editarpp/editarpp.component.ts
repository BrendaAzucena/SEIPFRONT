import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Permiso } from '../interfaces/permiso';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarpp',
  templateUrl: './editarpp.component.html',
  styleUrl: './editarpp.component.css'
})
export class EditarppComponent implements OnInit {
  FormPermiso: FormGroup;
  idPermiso: any;
  especie: any[] = [];
  @Input() datosPermiso: Permiso = { id:'',NombrePermiso: '', TPEspecieid: '' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idPermiso = this.activate.snapshot.paramMap.get('id');
    this.api.getId(this.idPermiso).subscribe(datosPermiso =>{
      console.log(datosPermiso);
      this.FormPermiso.setValue({
        id: datosPermiso[0]['id'],
        NombrePermiso: datosPermiso[0]['NombrePermiso'],
        TPEspecieid: datosPermiso[0]['TPEspecieid']
      }
      );
    }
    );
    this.FormPermiso=this.formulario.group({
      id: [''],
      NombrePermiso: [''],
      TPEspecieid: ['']
      });
  }
  
  ngOnInit(): void {
   this.showPermiso();
   this.getEspecie();
  }

 showPermiso(){
  this.api.getId(this.activate.snapshot.params['id']).subscribe((response: any) => { 
    this.datosPermiso = response.data;
    console.log(response);
  });
 }
   

getEspecie(): void {
  this.api.getEspecies().subscribe((response: any) => {
    this.especie = response.data;
    console.log('Especies:', this.especie);
  });
}

put(): any {
  this.api.editar(this.idPermiso, this.FormPermiso.value).subscribe(datos => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se edito correctamente",
      showConfirmButton: false,
      timer: 1500
    });

    this.router.navigateByUrl('permisoPesca');
    });
  };
}