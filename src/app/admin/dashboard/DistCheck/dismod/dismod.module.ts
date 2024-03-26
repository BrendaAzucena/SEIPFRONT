import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistrictComponent } from '../district/district.component';
import { UpddistComponent } from '../upddist/upddist.component';



@NgModule({
  declarations: [
    DistrictComponent,
    UpddistComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DismodModule { }
