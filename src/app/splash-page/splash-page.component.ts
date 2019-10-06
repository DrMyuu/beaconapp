import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileModalPageComponent } from '../profile-modal-page/profile-modal-page.component';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss'],
})
export class SplashPageComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  async presentGettingStartedModal() {
    const modal = await this.modalController.create({
      component: ProfileModalPageComponent
    });
    return await modal.present();
  };
  
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
    this.presentGettingStartedModal();
  };

  ngOnInit() {}

}
