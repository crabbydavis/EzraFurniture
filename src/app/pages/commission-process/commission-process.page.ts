import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

enum Commission {
  Why = 0,
  How = 1,
  Design = 2,
  Cost = 3
}

@Component({
  selector: 'app-commission-process',
  templateUrl: './commission-process.page.html',
  styleUrls: ['./commission-process.page.scss'],
})
export class CommissionProcessPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  Commission = Commission;
  currentSection = Commission.Why;
  loaded = false;
  slideOpts = {
    zoom: false,
  }

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
    }, 100)
  }

  goToCommission(): void {
    this.navCtrl.navigateForward('contact');
  }

  slideTo(index: number): void {
    this.slides.slideTo(index);
  }

  async updateCurrentSection() {
    try {
      this.currentSection = await this.slides.getActiveIndex();
    } catch(error) {
      console.log(error);
    }
  }
}
