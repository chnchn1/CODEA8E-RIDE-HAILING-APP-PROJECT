import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickUpLocPageRoutingModule } from './pick-up-loc-routing.module';

import { PickUpLocPage } from './pick-up-loc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickUpLocPageRoutingModule
  ],
  declarations: [PickUpLocPage]
})
export class PickUpLocPageModule {}
