import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    IonicModule,
  ],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class ComponentsModule {}
