import { Component, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Office } from '../interfaces/office';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrl: './alter.component.css'
})
export class AlterComponent {

  formuOfi: FormGroup;
  idOficina: any;

  @Input() datosOficina: Office = { id: '', NombreOficina: '', Ubicacion: '', Telefono: '', Email: '' };
  constructor(public formulario: FormBuilder, private api: ApiService, private router: Router, private activate: ActivatedRoute) {
    this.idOficina = this.activate.snapshot.paramMap.get('id');
    this.api.getIdOfi(this.idOficina).subscribe(datosOficina => {
      console.log(datosOficina);
      this.formuOfi.setValue({
        id: datosOficina[0]['id'],
        NombreOficina: datosOficina[0]['NombreOficina'],
        Ubicacion: datosOficina[0]['Ubicacion'],
        Telefono: datosOficina[0]['Telefono'],
        Email: datosOficina[0]['Email']
      }
      );
    }
    );
    this.formuOfi = this.formulario.group({
      id: [''],
      NombreOficina: [''],
      Ubicacion: [''],
      Telefono: [''],
      Email: ['']
    });
  }

  ngOnInit(): void {

    this.showOFicina();


  }
  showOFicina() {
    this.api.getIdOfi(this.activate.snapshot.params['id']).subscribe((response: any) => {

      this.datosOficina = response.data;
      console.log(response);
    });
  }

 
  put(): any {
    this.api.editOfi(this.idOficina, this.formuOfi.value).subscribe(datosOficinas => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se edito correctamente",
        showConfirmButton: false,
        timer: 1500
      });

      this.router.navigateByUrl('office');
      });
    };
  }


