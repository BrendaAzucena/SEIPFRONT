import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesComponent } from '../species/species.component';
import { SharedModule } from '../../../../shared/module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SpeciesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SpemodModule { }
