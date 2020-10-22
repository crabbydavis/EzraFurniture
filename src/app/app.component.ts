import { ContactUsPage } from './pages/contact-us/contact-us.page';
import { Component, ViewEncapsulation } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  dark = false;

  constructor(
    private modalCtrl: ModalController,
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.setStyle({
        style: StatusBarStyle.Dark //this.isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light
      });

      // Display content under transparent status bar (Android only)
      StatusBar.setOverlaysWebView({
        overlay: true
      });
      SplashScreen.hide();
    });
  }

  async showContactModal() {
    const modal = await this.modalCtrl.create({
      component: ContactUsPage,
      cssClass: 'contact-modal'
    });
    modal.present();
  }
}
