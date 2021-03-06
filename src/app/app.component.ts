import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ProfileModalPageComponent } from './profile-modal-page/profile-modal-page.component';
import { SplashPageComponent } from './splash-page/splash-page.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalController: ModalController
  ) {
    this.initializeApp();
  }

  async presentGettingStartedModal() {
    const modal = await this.modalController.create({
      component: ProfileModalPageComponent
    });
    return await modal.present();
  };

  async presentSplashModal() {
    const modal = await this.modalController.create({
      component: SplashPageComponent
    });
    return await modal.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.presentSplashModal();
    });
  }

}
