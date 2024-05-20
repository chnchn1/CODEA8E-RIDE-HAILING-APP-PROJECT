import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickUpLocPage } from './pick-up-loc.page';

const routes: Routes = [
  {
    path: '',
    component: PickUpLocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickUpLocPageRoutingModule {}
