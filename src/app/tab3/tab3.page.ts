import { Component, OnInit } from '@angular/core';
import { GuideService } from '../services/guide.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  guides = [];
  constructor(private guideService: GuideService) {}

  toggleGuide(guide) {
    guide.visible = !guide.visible;
  }

  getGuides() {
    this.guideService.getGuides()["Guide"].forEach((guide) => {
      guide["visible"] = false;
      this.guides.push(guide);
    });
    console.log(this.guides);
  };

  ngOnInit() {
    this.getGuides();
  };

}
