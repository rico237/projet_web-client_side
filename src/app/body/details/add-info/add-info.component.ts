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
    this.newStore.id_store='0000';
    this.newStore.id_product='0000';
    
  }
}
