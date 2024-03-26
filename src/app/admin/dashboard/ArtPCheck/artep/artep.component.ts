import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artep',
  templateUrl: './artep.component.html',
  styleUrl: './artep.component.css'
})
export class ArtepComponent implements OnInit {

  FormArte:FormGroup;
  data:  any[]=[];
  constructor(private api:ApiService,private router:Router, public formulario:FormBuilder){ 
  this.FormArte=this.formulario.group({
    NombreArtePesca: ['',Validators.required],
     });
     console.log(this.FormArte);
}
  
  ngOnInit(): void {
   this.arte();
  }

  arte(){
    this.api.getArt().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
  }
  
  enviar(): any {
    console.log(this.FormArte.value);
    this.api.agreArt(this.FormArte.value).subscribe(() => {
      this.router.navigateByUrl('arte', { skipLocationChange: true }).then(() => {
        this.router.navigate(['arte']);
        window.location.reload();
     });
     
    });
  }


editar(id = []){
  this.router.navigate(['update-arte', id]);
  }

  
  borrar(id: any, iControl: any) {
    this.api.deleteA(id).subscribe(
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

