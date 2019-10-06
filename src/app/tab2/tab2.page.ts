import { Component, OnInit } from '@angular/core';
import { SupplyService } from '../services/supply.service';
import { ModalController } from '@ionic/angular';
import { SplashPageComponent } from '../splash-page/splash-page.component';
import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';
import { NewChecklistItemComponent } from '../new-checklist-item/new-checklist-item.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  supplies = [];
  constructor(private supplyService: SupplyService, public modalController: ModalController) {}

  async presentConfirmationModal(supply) {
    supply.selected = true;
    const modal = await this.modalController.create({
      component: OrderConfirmationComponent
    });
    return await modal.present();
  };

  async presentNewChecklistModal() {
    const modal = await this.modalController.create({
      component: NewChecklistItemComponent
    });
    return await modal.present();
  }

  refreshSupplies() {
    this.supplies = this.supplyService.returnMockSupplies();
  };

  ngOnInit() {
    this.refreshSupplies();
  };
}
