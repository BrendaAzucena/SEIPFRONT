import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoactComponent } from '../tipoact/tipoact.component';
import { EditartipoComponent } from '../editartipo/editartipo.component';
import { SharedModule } from '../../../../shared/module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    TipoactComponent,
    EditartipoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ActmodModule { }
