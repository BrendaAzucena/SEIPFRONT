import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { UpdlocComponent } from '../../dashboard/LocCheck/updloc/updloc.component';
import { SharedModule } from '../../../shared/module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UpdlocComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginmodModule { }
