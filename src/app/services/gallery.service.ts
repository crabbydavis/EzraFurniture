import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';
import { ProjectDetails } from '../model/project-details.model';
import { Project } from '../model/project.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GalleryService {

    private projectsCollection: AngularFirestoreCollection<Project>;
    private bannerCollection: AngularFirestoreCollection<{image: string}>;

    constructor(
        private firestore: AngularFirestore,
        private storage: AngularFireStorage
    ) {
        this.projectsCollection = this.firestore.collection<Project>('projects');
        this.bannerCollection = this.firestore.collection<{image: string}>('banner');
    }

    getBannerImages(): Observable<{image: string}[]> {
        return this.bannerCollection.valueChanges().pipe(
            map(banner => {
                console.log('banner', banner)
                banner.forEach(async img => {
                    const downloadUrl = await this.storage.ref('Gallery/' + img.image).getDownloadURL().toPromise();
                    img.image = downloadUrl;
                });
                return banner;
            })
        )
    }

    getProjects(): Observable<Project[]> {
        return this.projectsCollection.valueChanges().pipe(
            map(projects => {
                projects.forEach(async (project) => {
                    const downloadUrl = await this.storage.ref('Gallery/' + project.image).getDownloadURL().toPromise();
                    project.image = downloadUrl;
                    console.log(downloadUrl);
                });
                return projects;
            })
        )
    }

    getProjectDetails(name: string): Observable<ProjectDetails> {
        return this.firestore.collection<ProjectDetails>('projectDetails', ref => ref.where('name', '==', name)).valueChanges().pipe(
            map(res => {
                const projectDetails = res[0];
                projectDetails.images.forEach(async (imgName, index) => {
                    const downloadUrl = await this.storage.ref('Gallery/' + imgName).getDownloadURL().toPromise();
                    projectDetails.images[index] = downloadUrl;
                });
                return projectDetails;
            })
        );
    }
}