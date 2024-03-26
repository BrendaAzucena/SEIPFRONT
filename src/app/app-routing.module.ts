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

const routes: Routes = [
  {
    path:'office',
    component:OfficeComponent
  },
  {
    path:'update-office/:id',
    component:AlterComponent
  },
  {
    path:'species',
    component:SpeciesComponent
  },
  {
    path:'arte',
    component:ArtepComponent
  },
  {
    path:'update-arte/:id',
    component:UpdateComponent
  },
  {
    path:'product',
    component:ProducComponent
  },  
  {
    path:'update-product/:id',
    component:UpdproComponent
  },
  {
    path:'region',
    component:RegionComponent
  }, 
  {
    path:'update-region/:id',
    component:UpdregComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
