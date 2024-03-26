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
import { RegionComponent } from './admin/dashboard/RegCheck/region/region.component';
import { UpdregComponent } from './admin/dashboard/RegCheck/updreg/updreg.component';
import { RegmodModule } from './admin/dashboard/RegCheck/regmod/regmod.module';

@NgModule({
  declarations: [
    AppComponent,

      
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
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
