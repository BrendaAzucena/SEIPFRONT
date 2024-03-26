import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlterComponent } from '../alter/alter.component';
import { OfficeComponent } from '../office/office.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/module/shared.module';



@NgModule({
  declarations: [
    OfficeComponent,
    AlterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class OffmodModule { }
