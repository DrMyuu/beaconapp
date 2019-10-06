import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss'],
})
export class OrderConfirmationComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  };
  
  ngOnInit() {}

}
