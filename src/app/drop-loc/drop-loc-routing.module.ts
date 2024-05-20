import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DropLocPage } from './drop-loc.page';

const routes: Routes = [
  {
    path: '',
    component: DropLocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DropLocPageRoutingModule {}
