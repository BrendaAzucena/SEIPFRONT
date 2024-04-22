import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeComponent } from './admin/dashboard/OfiCheck/office/office.component';
import { AlterComponent } from './admin/dashboard/OfiCheck/alter/alter.component';
import { SpeciesComponent } from './admin/dashboard/EspCheck/species/species.component';
import { ArtepComponent } from './admin/dashboard/ArtPCheck/artep/artep.component';
import { UpdateComponent } from './admin/dashboard/ArtPCheck/update/update.component';
import { ProducComponent } from './admin/dashboard/ProdCheck/produc/produc.component';
import { UpdproComponent } from './admin/dashboard/ProdCheck/updpro/updpro.component';
import { RegionComponent } from './admin/dashboard/RegCheck/region/region.component';
import { UpdregComponent } from './admin/dashboard/RegCheck/updreg/updreg.component';
import { DistrictComponent } from './admin/dashboard/DistCheck/district/district.component';
import { UpddistComponent } from './admin/dashboard/DistCheck/upddist/upddist.component';
import { MunicipioComponent } from './admin/dashboard/MuniCheck/municipio/municipio.component';
import { UpdmuniComponent } from './admin/dashboard/MuniCheck/updmuni/updmuni.component';
import { LocationComponent } from './admin/dashboard/LocCheck/location/location.component';
import { UpdlocComponent } from './admin/dashboard/LocCheck/updloc/updloc.component';
import { LoginComponent } from './admin/login/login/login.component';
import { SolicitudComponent } from './admin/Consultas/solicitud/solicitud/solicitud.component';
import { UEFComponent } from './admin/Consultas/UEF/uef/uef.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'solicitud',
    component: SolicitudComponent
  },
  {
    path: 'UEF',
    component: UEFComponent
  },
  {
    path: 'office',
    component: OfficeComponent
  },
  {
    path: 'update-office/:id',
    component: AlterComponent
  },
  {
    path: 'species',
    component: SpeciesComponent
  },
  {
    path: 'arte',
    component: ArtepComponent
  },
  {
    path: 'update-arte/:id',
    component: UpdateComponent
  },
  {
    path: 'product',
    component: ProducComponent
  },
  {
    path: 'update-product/:id',
    component: UpdproComponent
  },
  {
    path: 'region',
    component: RegionComponent
  },
  {
    path: 'update-region/:id',
    component: UpdregComponent
  },
  {
    path: 'district',
    component: DistrictComponent
  },
  {
    path: 'update-district/:id',
    component: UpddistComponent
  },
  {
    path: 'municipio',
    component: MunicipioComponent
  },
  {
    path: 'update-municipio/:id',
    component: UpdmuniComponent
  },
  {
    path: 'localidad',
    component: LocationComponent
  },
  {
    path: 'update-localidad/:id',
    component: UpdlocComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
