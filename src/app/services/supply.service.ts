import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  constructor() { }

  returnMockSupplies() {
    return [
      {
        name: "Walmart",
        location: "",
        item: "Water",
        quantity: 1,
        selected: false
      },
      {
        name: "Office Depot",
        location: "",
        item: "Batteries",
        quanity: 2,
        selected: false
      }
    ]
  }
}
