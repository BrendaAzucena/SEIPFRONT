import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffmodModule } from './admin/dashboard/OfiCheck/offmod/offmod.module';
import { SharedModule } from './shared/module/shared.module';
import { SpemodModule } from './admin/dashboard/EspCheck/spemod/spemod.module';
import { ArtemodModule } from './admin/dashboard/ArtPCheck/artemod/artemod.module';
import { PromodModule } from './admin/dashboard/ProdCheck/promod/promod.module';
import { RegmodModule } from './admin/dashboard/RegCheck/regmod/regmod.module';
import { DismodModule } from './admin/dashboard/DistCheck/dismod/dismod.module';
import { MunmodModule } from './admin/dashboard/MuniCheck/munmod/munmod.module';
import { LocationComponent } from './admin/dashboard/LocCheck/location/location.component';
import { LoginmodModule } from './admin/login/loginmod/loginmod.module';
import { SolimodModule } from './admin/Consultas/solicitud/solimod/solimod.module';
import { UEFMModule } from './admin/Consultas/UEF/uefm/uefm.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { PanelComponent } from './admin/dashboard/PanelControl/panel/panel.component';
import { PermodModule } from './admin/dashboard/PermisoPesca/permod/permod.module';
import { ActmodModule } from './admin/dashboard/TActividad/actmod/actmod.module';
import { CubiertaComponent } from './admin/dashboard/Cubierta/cubierta/cubierta.component';
import { CumodModule } from './admin/dashboard/Cubierta/cumod/cumod.module';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    PanelComponent,
   
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OffmodModule,
    RegmodModule,
    SpemodModule,
    SharedModule,
    PromodModule,
    ArtemodModule,
    CumodModule,
    PromodModule,
    DismodModule,
    PermodModule,
    ActmodModule,
    LoginmodModule,
    SolimodModule,
    UEFMModule,
    MunmodModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
