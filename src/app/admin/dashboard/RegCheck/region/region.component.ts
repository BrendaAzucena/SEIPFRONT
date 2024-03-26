import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrl: './region.component.css'
})
export class RegionComponent implements OnInit {

  FormRegion: FormGroup;
  data: any[] = [];
  constructor(private api: ApiService, private router: Router, public formulario: FormBuilder) {
    this.FormRegion = this.formulario.group({
      NombreRegion: ['', Validators.required],
    });
    console.log(this.FormRegion);
  }

  ngOnInit(): void {
    this.region();
  }

  region() {
    this.api.getRegiones().subscribe((response: any) => {
      this.data = response.data;
      console.log(response);
    })
  }

  enviar(): any {
    console.log(this.FormRegion.value);
    this.api.agrerRegion(this.FormRegion.value).subscribe(() => {
      this.router.navigateByUrl('region', { skipLocationChange: true }).then(() => {
        this.router.navigate(['region']);
        window.location.reload();
      });

    });
  }

  cancelar() {
    this.router.navigateByUrl('panel');
  }

  editar(id = []) {
    this.router.navigate(['update-region', id]);
  }


  borrar(id: any, iControl: any) {
    this.api.deleteR(id).subscribe(
      () => {
        this.data.splice(iControl, 1);
      },
      (error) => {
        console.log('Error al eliminar:', error);
      }
    );
  }


}