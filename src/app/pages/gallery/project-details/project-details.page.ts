import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { ProjectDetails } from 'src/app/model/project-details.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.page.html',
  styleUrls: ['./project-details.page.scss'],
})
export class ProjectDetailsPage implements OnInit {

  details: ProjectDetails = new ProjectDetails();
  isLoading = true;
  options = {
    zoom: false,
  }

  constructor(
    private galleryService: GalleryService,
    private location: Location
  ) { }

  ngOnInit() {
    const name = (this.location.getState() as any).name;
    this.galleryService.getProjectDetails(name).subscribe(details => {
      this.details = details;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    })
  }
}
