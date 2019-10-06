import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-modal-page',
  templateUrl: './profile-modal-page.component.html',
  styleUrls: ['./profile-modal-page.component.scss'],
})
export class ProfileModalPageComponent implements OnInit {

  page = 'start';
  constructor(public modalController: ModalController) { }

  switchPage(page) {
    this.page = page;
  };

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  };

  ngOnInit() {}

}
