import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../../services/food.service';
import { Store } from '../../../../business/store';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css']
})
export class AddInfoComponent implements OnInit {
  // ajouter des chaps pour chaque entree et construire un objet Store avec
  public newStore : Store = new Store();
  constructor(private foodService: FoodService) { }

  ngOnInit() {
  }

  submitStore(name,prix,address,lat,lng){
    // recuperer les input et les envoyer au server via food service
    console.log("trying to submit a store");
    if (name && !isNaN(prix) && address && !isNaN(lat) && !isNaN(lng)){
      this.newStore._id = '0000';
      this.newStore.id_store='0000';
      this.newStore.id_product='0000'; // to be catched
      this.newStore.name_store=name;
      this.newStore.prix = prix;
      this.newStore.adresse = address;
      this.newStore.lat = lat;
      this.newStore.long = lng;
      this.foodService.addNewStore(this.newStore);
    } else {
      console.error("one of the fields is incorrectly filled")
    }
  }
}
