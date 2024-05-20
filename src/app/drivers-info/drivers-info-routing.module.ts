import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversInfoPage } from './drivers-info.page';

const routes: Routes = [
  {
    path: '',
    component: DriversInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriversInfoPageRoutingModule {}
