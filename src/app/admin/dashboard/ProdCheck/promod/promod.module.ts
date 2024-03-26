import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProducComponent } from '../produc/produc.component';
import { UpdproComponent } from '../updpro/updpro.component';



@NgModule({
  declarations: [
    ProducComponent,
    UpdproComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PromodModule { }
