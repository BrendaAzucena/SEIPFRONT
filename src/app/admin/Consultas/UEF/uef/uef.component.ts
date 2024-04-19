import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Region } from '../../../dashboard/RegCheck/interface/region';
import { Office } from '../../../dashboard/OfiCheck/interfaces/office';
import { Municipio } from '../../../dashboard/MuniCheck/interface/municipio';
import { Localidad } from '../../../dashboard/LocCheck/interface/localidad';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-uef',
  templateUrl: './uef.component.html',
  styleUrl: './uef.component.css'
})
export class UEFComponent implements OnInit {
  regi: Region[] = [];
  oficinas: Office[] = [];
  muni: Municipio[] = [];
  locali: Localidad[] = [];
  FormUni: FormGroup;
  constructor(private api: ApiService, private router: Router, public formulario: FormBuilder) {
    const hoy = new Date();
    const fechaActual = this.formatoFecha(hoy);
    this.FormUni = this.formulario.group({
      FechaRegistro: [{ value: fechaActual, disabled: true }],
      Ofcid: [''],
      RNPA: ['', Validators.required],
      RFC: ['', Validators.required],
      CURP: ['', Validators.required],
      Nombres: ['', Validators.required],
      ApPaterno: ['', Validators.required],
      ApMaterno: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      Sexo: ['', Validators.required],
      GrupoSanguineo: ['', Validators.required],
      Email: ['', Validators.required],
      Calle: ['', Validators.required],
      NmExterior: ['', Validators.required],
      NmInterior: ['', Validators.required],
      CodigoPostal: ['', Validators.required],
      Locid: [''],
      NmPrincipal: ['', Validators.required],
      TpNmPrincipal: ['', Validators.required],
      NmSecundario: ['', Validators.required],
      TpNmSecundario: ['', Validators.required],
      IniOperaciones: ['', Validators.required],
      ActivoEmbMayor: [false],
      ActivoEmbMenor: [false],
      ActvAcuacultura: [false],
      ActvPesca: [false],
      DocActaNacimiento: ['', Validators.required],
      DocComprobanteDomicilio: ['', Validators.required],
      DocCURP: ['', Validators.required],
      DocIdentificacionOfc: ['', Validators.required],
      DocRFC: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.Regiones();
    this.Municipios();
    this.oficin();
    this.Localidades();
  }

  formatoFecha(fecha: Date): string {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear();
    return `${año}-${mes}-${dia}`;
  }

  Regiones() {
    this.api.getRegiones().subscribe((response: any) => {
      this.regi = response.data;
    });
  }

  Municipios() {
    this.api.getMunicipios().subscribe((response: any) => {
      this.muni = response.data;
    });
  }

  Localidades() {
    this.api.getLocalidades().subscribe((response: any) => {
      this.locali = response.data;
    });
  }

  oficin() {
    this.api.getOfi().subscribe((response: any) => {
      this.oficinas = response.data;
    });
  }

 
  enviar(): any {
    this.api.agreUni(this.FormUni.value).subscribe(() => {
      this.router.navigateByUrl('solicitud', { skipLocationChange: false }).then(() => {
        this.router.navigate(['solicitud']);
      });
    });
  }

  
}