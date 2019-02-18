import { Component, OnInit } from "@angular/core";
import { tableauNutrition } from "../tableauNutrition/tableauNutrition.component";
import { FoodDetailStoreService } from "../../../services/storage/food-detail.store.service";

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
    public disponibilites: object[] = [];

    public ajouterInfos: boolean = false;

    public foodDetail;

    constructor(private foodDetailStoreservice: FoodDetailStoreService) {
    }

    public ngOnInit() {
        this.foodDetail = this.foodDetailStoreservice.getFoodInfos();
        this.settableauNutrition();
        this.setAllergenes();
        this.setComposants();
        this.recipeName = "Pâtes (nom par defaut)";
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
}
