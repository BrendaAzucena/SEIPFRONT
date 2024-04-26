import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrl: './permisos.component.css'
})
export class PermisosComponent implements OnInit {

  data: any[] = [];
  currentPage = 1;
  itemsPerPage = 7;
  displayedData: any[] = [];
  FormPermiso: FormGroup;
  constructor(private api: ApiService, private router: Router, public formulario: FormBuilder) {
    this.FormPermiso = this.formulario.group({
      NombrePermiso: ['', Validators.required],
      TPEspecieid: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.permisos();
    this.especies();
  }

 
  permisos() {
    this.api.getPermiso().subscribe((response: any) => {
      this.data = response.data;
      console.log(response);
      this.updatePage(1); 
    });
  }
  
  especies(){
    this.api.getEspecies().subscribe((response: any ) => { 
      this.data = response.data;
    console.log(response);
    })
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
    console.log(this.FormPermiso.value);
    this.api.agregar(this.FormPermiso.value).subscribe(() => {
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

      this.router.navigateByUrl('permisoPesca', { skipLocationChange: true }).then(() => {
        this.router.navigate(['permisoPesca']);
      });
    });
  }


  editar(id = []) {
    this.router.navigate(['update-permisoPesca', id]);
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
   this.FormPermiso.reset();
  }





}

