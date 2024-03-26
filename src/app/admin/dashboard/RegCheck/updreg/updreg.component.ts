import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Region } from '../interface/region';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updreg',
  templateUrl: './updreg.component.html',
  styleUrl: './updreg.component.css'
})
export class UpdregComponent implements OnInit {
  formuReg: FormGroup;
  idRegion: any;
  
  @Input() datosRegion: Region = { id:'', NombreRegion: '' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idRegion = this.activate.snapshot.paramMap.get('id');
    this.api.getIdRegion(this.idRegion).subscribe(datosRegion =>{
      console.log(datosRegion);
      this.formuReg.setValue({
        id: datosRegion[0]['id'],
        NombreRegion: datosRegion[0]['NombreRegion']
      }
      );
    }
    );
    this.formuReg=this.formulario.group({
      id: [''],
      NombreRegion: ['']
      });
  }
  
  ngOnInit(): void {
   this.showRegion();
  }

 showRegion(){
  this.api.getIdRegion(this.activate.snapshot.params['id']).subscribe((response: any) => {
    this.datosRegion = response.data;
    console.log(response);
  });
 }
    
  put():any{
   
    this.api.editRegion(this.idRegion, this.formuReg.value).subscribe(datosRegions => {
      this.router.navigateByUrl('region');
    
    });
    
}}

