import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommissionProcessPageRoutingModule } from './commission-process-routing.module';

import { CommissionProcessPage } from './commission-process.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommissionProcessPageRoutingModule
  ],
  declarations: [CommissionProcessPage]
})
export class CommissionProcessPageModule {}
