import { Component, OnInit } from '@angular/core';
import { FoodService } from "../../../../services/food.service";
import { Store } from "../../../../business/store";
@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent implements OnInit {
  public dispos: Store[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getDispos();
  }

  mockDispos(n) {
    for (let i = 0; i < n; i++) {
      this.dispos.push(new Store());
    }
  }

  getDispos() {
    this.foodService.getStores("5c658547d903a34c306ee7ea").subscribe((stor) => {
      const prices = stor.prices;
      this.dispos = [];
      prices.forEach((value) => {
        const store: Store = new Store();
        store._id = value._id;
        store.id_product = value.id_product;
        store.id_store = value.id_store;
        store.name_store = value.name_store;
        store.adresse = value.adresse;
        store.lat = value.lat;
        store.long = value.long;
        store.prix = value.prix;
        this.dispos.push(store);
      })
    });
    console.error(this.dispos)
  }


}
