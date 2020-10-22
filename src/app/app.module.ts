import { ContactUsPageModule } from './pages/contact-us/contact-us.module';
import { environment } from './../environments/environment.prod';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    ContactUsPageModule
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production
    // })
  ],
  declarations: [AppComponent],
  providers: [SocialSharing],
  bootstrap: [AppComponent]
})
export class AppModule {}
