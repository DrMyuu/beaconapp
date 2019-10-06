import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-checklist-item',
  templateUrl: './new-checklist-item.component.html',
  styleUrls: ['./new-checklist-item.component.scss'],
})
export class NewChecklistItemComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  };
  
  ngOnInit() {}

}
