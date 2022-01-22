import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Project } from 'src/app/model/project.model';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  isLoading = true;
  projects: Project[] = [];

  constructor(
    public galleryService: GalleryService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.galleryService.getProjects().subscribe(res => {
      this.projects = res;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  }

  viewProjectDetails(name: string): void {
    const navExtras: NavigationExtras = { state: { name }};
    this.navCtrl.navigateForward(`gallery/project-details`, navExtras);
  }
}
