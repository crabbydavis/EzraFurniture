import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommissionProcessPage } from './commission-process.page';

const routes: Routes = [
  {
    path: '',
    component: CommissionProcessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommissionProcessPageRoutingModule {}
