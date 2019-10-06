import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import * as L from 'leaflet';
import { UserService } from '../services/user.service';
declare var google; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  map = null;
  page = 'shelters';
  shelters = [

  ];
  loading = false;
  constructor(public modalController: ModalController, private userService: UserService) {}

  getLocalShelters(lat, lng) {
    this.userService.getShelters().forEach((shelter) => {
      this.shelters.push(shelter);
    })
    // this.loading = true;
    // var service = new google.maps.places.PlacesService(this.map);
    // var request = {
    //   query: 'shelter',
    //   fields: ['name', 'geometry'],
    // };
    // service.findPlaceFromQuery(request, (results, status) => {
    //   results.forEach((result) => {
    //     this.shelters.push(result);
    //   });
    //   this.loading = false;
    // });
  };

  switchPage(page) {
    this.page = page;
  }

  getUserPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.map = new google.maps.Map(
          document.getElementById('map'), {center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude), zoom: 15});
        this.getLocalShelters(position.coords.latitude, position.coords.longitude);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  ngOnInit() {
    this.getUserPosition();
  };

}
