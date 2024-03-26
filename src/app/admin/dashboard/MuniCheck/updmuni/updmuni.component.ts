import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Municipio } from '../interface/municipio';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-updmuni',
  templateUrl: './updmuni.component.html',
  styleUrl: './updmuni.component.css'
})
export class UpdmuniComponent implements OnInit {
  formuMuni: FormGroup;
  idMunicipio: any;
  regiones: any[] = [];
  distritos: any[] = [];
  @Input() datosMunicipio: Municipio = { id:'',NombreMunicipio: '', Disid: '',Regid: '' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idMunicipio = this.activate.snapshot.paramMap.get('id');
    this.api.getIdMuni(this.idMunicipio).subscribe(datosMunicipio =>{
      console.log(datosMunicipio);
      this.formuMuni.setValue({
        id: datosMunicipio[0]['id'],
       NombreMunicipio: datosMunicipio[0]['NombreComun'],
        Disid: datosMunicipio[0]['Disid'],
        Regid: datosMunicipio[0]['Regid']
      }
      );
    }
    );
    this.formuMuni=this.formulario.group({
      id: [''],
     NombreMunicipio: [''],
      Disid: [''],
      Regid: ['']
      });
  }
  
  ngOnInit(): void {
   this.showMunicipio();
   this.getRegion();
   this.getDistrito();
  }

 showMunicipio(){
  this.api.getIdMuni(this.activate.snapshot.params['id']).subscribe((response: any) => { 
    this.datosMunicipio = response.data;
    console.log(response);
  });
 }
   
 getRegion(): void {
  this.api.getRegiones().subscribe((response: any) => {
    this.regiones = response.data;
    console.log('region:', this.regiones);
  });
}

getDistrito(): void {
  this.api.getDistritos().subscribe((response: any) => {
    this.distritos = response.data;
    console.log('distrito:', this.distritos);
  });
}

  put():any{
    this.api.editMuni(this.idMunicipio, this.formuMuni.value).subscribe(datosMunicipios => {
      this.router.navigateByUrl('municipio');
    
    });
    
}}
