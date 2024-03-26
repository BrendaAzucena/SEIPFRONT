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
import { UpdlocComponent } from './admin/dashboard/LocCheck/updloc/updloc.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    UpdlocComponent,
      
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
    DismodModule,
    MunmodModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
