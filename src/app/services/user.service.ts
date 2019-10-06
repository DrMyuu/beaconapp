import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getShelters() {
    return [{
      name: "Boca Raton High School",
      disabled: true,
      pets: false,
      lat: 0,
      lng: 0
    }]
  }
}
