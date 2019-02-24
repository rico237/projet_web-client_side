import { Component, OnInit } from "@angular/core";
import { tableauNutrition } from "../tableauNutrition/tableauNutrition.component";
import { FoodDetailStoreService } from "../../../services/storage/food-detail.store.service";
import { FoodService } from '../../../services/food.service';
import { Store } from 'src/business/store';

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
    public recipeName: string;
    public tableauNutrition: tableauNutrition;
    public composants: string [] = [];
    public allergenes: string[] = [];
    public price: number = 1;
    public disponible: Store[] = [];

    public ajouterInfos: boolean = false;

    public foodDetail;

    public nutriScoreImage: any = null;

    constructor(
        private foodDetailStoreservice: FoodDetailStoreService,
        private foodService: FoodService
    ) {
    }

    public ngOnInit() {
        this.foodDetail = this.foodDetailStoreservice.getFoodInfos();
        this.settableauNutrition();
        this.setAllergenes();
        this.setComposants();
        this.recipeName = "Pâtes (nom par defaut)";
        this.nutriScoreImage = this.foodService.retrieveNutriScore(this.foodDetail.nutrition_grade_fr).img;
        this.getDispos();
        if (this.disponible.length === 0){
            this.ajouterInfos = true;
        }
    }

    public settableauNutrition() {
        // mock des donnes des tableauNutrition
        this.tableauNutrition = new tableauNutrition();
    }

    public setComposants() {
        this.composants.push("semoule de BLE dur de qualité supérieure");
        this.composants.push("Oeuf");
    }

    public setAllergenes() {
        this.allergenes.push("Oeuf");
        this.allergenes.push("Gluten");
    }

    getDispos() {
        this.foodService.getStores(this.foodDetail._id).subscribe((stor) => {
          const prices = stor.prices;
          this.disponible = [];
          prices.forEach((value) => {
            const store: Store = new Store();
            store.id_product = value.id_product;
            store.id_store = value.id_store;
            store.name_store = value.name_store;
            store.adresse = value.adresse;
            store.lat = value.lat;
            store.long = value.long;
            store.prix = value.prix;
            this.disponible.push(store);
          })
        });
      }
}
