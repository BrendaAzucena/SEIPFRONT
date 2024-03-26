import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produc',
  templateUrl: './produc.component.html',
  styleUrl: './produc.component.css'
})
export class ProducComponent implements OnInit {

  FormProducto:FormGroup;
  especies: any[] = [];
  data:  any[]=[];
  constructor(private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormProducto=this.formulario.group({
    NombreComun:  [''],
    NombreCientifico:  [''],
    TPEspecieid: [''],
     });
     console.log(this.FormProducto);
}
  
  ngOnInit(): void {
    this.getespecies();
    this.producto();
  }

  producto(){
    this.api.getProd().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }

  getespecies(): void {
    this.api.getEspecie().subscribe((response: any) => {
      this.especies = response.data;
      console.log('especies:', this.especies);
    });
  }


enviar(): any {
  console.log(this.FormProducto.value);
  this.api.agreProduc(this.FormProducto.value).subscribe(() => {
    this.router.navigateByUrl('product', { skipLocationChange: true }).then(() => {
      this.router.navigate(['product']);
      window.location.reload();
    });
  });
}



editar(id = []){
  this.router.navigate(['update-product', id]);
  }

  
  borrar(id: any, iControl: any) {
    this.api.deleteP(id).subscribe(
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


