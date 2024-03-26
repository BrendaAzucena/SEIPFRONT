import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Artepes } from '../interface/artepes';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  formuArte: FormGroup;
  idArte: any;
  
  
  @Input() datosArte: Artepes = { id:'', NombreArtePesca: '' };
  constructor(public formulario: FormBuilder, private api:ApiService,private router:Router, private activate:ActivatedRoute ){
    this.idArte = this.activate.snapshot.paramMap.get('id');
    this.api.getIdArte(this.idArte).subscribe(datosArte =>{
      console.log(datosArte);
      this.formuArte.setValue({
        id: datosArte[0]['id'],
        NombreArtePesca: datosArte[0]['NombreArtePesca']
      }
      );
    }
    );
    this.formuArte=this.formulario.group({
      id: [''],
      NombreArtePesca: ['']
      });
  }
  
  ngOnInit(): void {
    this.showArte();
  }

 showArte(){
  this.api.getIdArte(this.activate.snapshot.params['id']).subscribe((response: any) => {
      
    this.datosArte = response.data;
    console.log(response);
  });
 }
    
  put():any{
    this.api.editArte(this.idArte, this.formuArte.value).subscribe(datosArtes => {
      this.router.navigateByUrl('arte');
    
    });
    
}}

