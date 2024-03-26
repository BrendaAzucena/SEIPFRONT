import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from '../region/region.component';
import { UpdregComponent } from '../updreg/updreg.component';
import { SharedModule } from '../../../../shared/module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegionComponent,
    UpdregComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegmodModule { }
