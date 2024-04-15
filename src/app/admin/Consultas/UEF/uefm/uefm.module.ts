import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UEFComponent } from '../uef/uef.component';



@NgModule({
  declarations: [
    UEFComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UEFMModule { }
