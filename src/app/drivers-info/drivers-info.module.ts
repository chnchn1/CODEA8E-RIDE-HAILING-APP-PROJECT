import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriversInfoPageRoutingModule } from './drivers-info-routing.module';

import { DriversInfoPage } from './drivers-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriversInfoPageRoutingModule
  ],
  declarations: [DriversInfoPage]
})
export class DriversInfoPageModule {}
