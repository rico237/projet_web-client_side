import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FoodService } from '../../../../services/food.service';
import { Store } from '../../../../business/store';
import { Receipe } from '../../../../business/receipe';

@Component({
  selector: "app-add-info",
  templateUrl: "./add-info.component.html",
  styleUrls: ["./add-info.component.css"]
})
export class AddInfoComponent implements OnInit {
  // ajouter des chaps pour chaque entree et construire un objet Store avec
  public newStore : Store = new Store();
  
  @Input() productInfos;
  @Output() submission = new EventEmitter<boolean>();

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    console.log(this.productInfos);
  }

  submitStore(name,prix,address,lat,lng){
    // recuperer les input et les envoyer au server via food service
    if (name && !isNaN(prix) && !isNaN(lat) && !isNaN(lng)){
      this.newStore.id_store="";
      this.newStore.id_product= this.productInfos._id;
      this.newStore.name_store=name;
      this.newStore.prix = prix;
      this.newStore.adresse = address || "";
      this.newStore.lat = lat;
      this.newStore.long = lng;
      this.foodService.addNewStore(this.newStore);
      setTimeout(()=>{
        this.submission.emit(true);
      },1000);
      
    } else {
      console.error("one of the fields is incorrectly filled")
    }
  }
}
