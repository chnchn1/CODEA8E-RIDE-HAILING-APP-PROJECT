import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DropLocPageRoutingModule } from './drop-loc-routing.module';

import { DropLocPage } from './drop-loc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DropLocPageRoutingModule
  ],
  declarations: [DropLocPage]
})
export class DropLocPageModule {}
