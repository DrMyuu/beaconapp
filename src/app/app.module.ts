import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileModalPageComponent } from './profile-modal-page/profile-modal-page.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { NewChecklistItemComponent } from './new-checklist-item/new-checklist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileModalPageComponent,
    SplashPageComponent,
    OrderConfirmationComponent,
    NewChecklistItemComponent
  ],
  entryComponents: [
    SplashPageComponent,
    ProfileModalPageComponent,
    OrderConfirmationComponent,
    NewChecklistItemComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, LeafletModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
