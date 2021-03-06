import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from "../../../../services/food.service";
import { Store } from "../../../../business/store";
@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent implements OnInit {
  public dispos: Store[] = [];
 @Input() productInfos;
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
    this.foodService.getStores(this.productInfos._id).subscribe((stor) => {
      const prices = stor.prices;
      this.dispos = [];
      prices.forEach((value) => {  
        const store: Store = new Store();
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
  }
}
