import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cubierta',
  templateUrl: './cubierta.component.html',
  styleUrl: './cubierta.component.css'
})
export class CubiertaComponent implements OnInit {

  data: any[] = [];
  currentPage = 1;
  itemsPerPage = 7;
  displayedData: any[] = [];
  FormCubierta: FormGroup;
  constructor(private api: ApiService, private router: Router, public formulario: FormBuilder) {
    this.FormCubierta = this.formulario.group({
      NombreCubierta: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cubierta();
  }

 
  cubierta() {
    this.api.getCu().subscribe((response: any) => {
      this.data = response.data;
      console.log(response);
      this.updatePage(1); 
    });
  }

  
  updatePage(page: number) {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedData = this.data.slice(startIndex, endIndex);
    this.currentPage = page;
  }
  
  previousPage() {
    if (this.currentPage > 1) {
      this.updatePage(this.currentPage - 1); 
    }
  }
  
  nextPage() {
    if (this.currentPage < Math.ceil(this.data.length / this.itemsPerPage)) {
      this.updatePage(this.currentPage + 1); 
    }
  }

  enviar(): any {
    console.log(this.FormCubierta.value);
    this.api.agregar(this.FormCubierta.value).subscribe(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se agregó correctamente",
        showConfirmButton: false,
        timer: 1500
      });

      setTimeout(() => {
        window.location.reload();
      }, 1000);

      this.router.navigateByUrl('Cubierta', { skipLocationChange: true }).then(() => {
        this.router.navigate(['Cubierta']);
      });
    });
  }


  editar(id = []) {
    this.router.navigate(['update-Cubierta', id]);
  }

  borrar(id: any, iControl: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: "¿Estás seguro de eliminar este dato?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminarlo",
      cancelButtonText: "No, cancelar",
      reverseButtons: true,
      showCloseButton: true,
      backdrop: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete(id).subscribe(
          () => {
            this.displayedData.splice(iControl, 1);
            swalWithBootstrapButtons.fire({
              title: "¡Eliminado!",
              text: "El dato ha sido eliminado correctamente",
              icon: "success",
              showCloseButton: true,
              backdrop: false
            });
          },
          (error) => {
            console.log('Error al eliminar:', error);
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "El dato no ha sido eliminado",
          icon: "error",
          showCloseButton: true,
          backdrop: false
        });
      }
    });
  }


 limpiar() {
   this.FormCubierta.reset();
  }

}


