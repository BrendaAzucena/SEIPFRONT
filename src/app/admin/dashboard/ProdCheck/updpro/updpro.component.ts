import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interface/product';

@Component({
  selector: 'app-updpro',
  templateUrl: './updpro.component.html',
  styleUrl: './updpro.component.css'
})
export class UpdproComponent implements OnInit {
  formuPro: FormGroup;
  idProducto: any;
  especies: any[] = [];
  @Input() datosProducto: Product = { id:'', NombreComun: '', NombreCientifico: '',TPEspecieid: '' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idProducto = this.activate.snapshot.paramMap.get('id');
    this.api.getIdPro(this.idProducto).subscribe(datosProducto =>{
      console.log(datosProducto);
      this.formuPro.setValue({
        id: datosProducto[0]['id'],
        NombreComun: datosProducto[0]['NombreComun'],
        NombreCientifico: datosProducto[0]['NombreCientifico'],
        TPEspecieid: datosProducto[0]['TPEspecieid']
      }
      );
    }
    );
    this.formuPro=this.formulario.group({
      id: [''],
      NombreComun: [''],
      NombreCientifico: [''],
      TPEspecieid: ['']
      });
  }
  
  ngOnInit(): void {
   this.showProducto();
   this.getespecies();
  }

 showProducto(){
  this.api.getIdPro(this.activate.snapshot.params['id']).subscribe((response: any) => {
      
    this.datosProducto = response.data;
    console.log(response);
  });
 }
   
 getespecies(): void {
  this.api.getEspecie().subscribe((response: any) => {
    this.especies = response.data;
    console.log('especies:', this.especies);
  });
}

  put():any{
    this.api.editPro(this.idProducto, this.formuPro.value).subscribe(datosProductos => {
      this.router.navigateByUrl('product');
    
    });
    
}}

