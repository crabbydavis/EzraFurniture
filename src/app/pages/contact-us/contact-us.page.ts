import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';

const { Clipboard } = Plugins;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  contactForm: FormGroup = new FormGroup({});
  emailMessage: string;

  constructor(
    private fb: FormBuilder,
    private toasterCtrl: ToastController
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      hearAbout: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      message: [null, [Validators.required]]
    });
  }

  updateMessage(): void {
    this.emailMessage = `First Name: ${this.contactForm.get('firstName').value}%0ALast Name: ${this.contactForm.get('lastName').value}%0AHow did you hear about us? ${this.contactForm.get('hearAbout').value}%0A%0AIs there a piece on the site you're interested in or do you have something custom in mind?%0A`
  }

  async copyEmail() {
    Clipboard.write({
      string: 'ezrafurnitureco@gmail.com'
    }).then(async () => {
      const toast = await this.toasterCtrl.create({
        message: 'Copied to clipboard',
        duration: 2000
      });
      toast.present();
    });
  }
}
