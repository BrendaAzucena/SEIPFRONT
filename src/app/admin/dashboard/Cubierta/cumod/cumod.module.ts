import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CubiertaComponent } from '../cubierta/cubierta.component';
import { EditcubiertaComponent } from '../editcubierta/editcubierta.component';



@NgModule({
  declarations: [
    CubiertaComponent,
    EditcubiertaComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CumodModule { }
