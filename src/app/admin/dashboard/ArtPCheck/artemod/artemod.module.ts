import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtepComponent } from '../artep/artep.component';
import { UpdateComponent } from '../update/update.component';



@NgModule({
  declarations: [
    ArtepComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ArtemodModule { }
