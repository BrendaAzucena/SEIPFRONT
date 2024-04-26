import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cubierta } from '../interface/Cubierta';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editcubierta',
  templateUrl: './editcubierta.component.html',
  styleUrl: './editcubierta.component.css'
})
export class EditcubiertaComponent implements OnInit {
  FormCubierta: FormGroup;
  idCubierta: any;
  especie: any[] = [];
  @Input() datoCubierta: Cubierta = { id:'',NombreCubierta: '' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute){
    this.idCubierta = this.activate.snapshot.paramMap.get('id');
    this.api.getId(this.idCubierta).subscribe(datoCubierta =>{
      console.log(datoCubierta);
      this.FormCubierta.setValue({
        id: datoCubierta[0]['id'],
        NombreCubierta: datoCubierta[0]['NombreCubierta']
      }
      );
    }
    );
    this.FormCubierta=this.formulario.group({
      id: [''],
      NombreCubierta: ['']
      });
  }
  
  ngOnInit(): void {
   this.showPermiso();
  }

 showPermiso(){
  this.api.getId(this.activate.snapshot.params['id']).subscribe((response: any) => { 
    this.datoCubierta = response.data;
    console.log(response);
  });
 }
   

put(): any {
  this.api.editar(this.idCubierta, this.FormCubierta.value).subscribe(datos => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se edito correctamente",
      showConfirmButton: false,
      timer: 1500
    });

    this.router.navigateByUrl('Cubierta');
    });
  };
}