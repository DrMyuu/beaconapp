import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LeafletModule.forRoot(),
    TabsPageRoutingModule,
    NgbModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
