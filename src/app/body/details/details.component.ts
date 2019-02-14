import { Component, OnInit } from '@angular/core';
import { tableauNutrition } from '../tableauNutrition/tableauNutrition.component';
import { FoodDetailStoreService } from '../../../services/storage/food-detail.store.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    public recipeName: string;
    public ingredients: tableauNutrition[] = [];
    public price: number = 1;
    public disponibilites: object [] = [];

    public foodDetail;

    constructor(private foodDetailStoreservice: FoodDetailStoreService) {
        this.ingredients = [];
    }

    public ngOnInit() {
        this.foodDetail = this.foodDetailStoreservice.getFoodInfos();
        this.setIngredients();
        console.log(this.foodDetail);
        this.recipeName = 'recipeName';
    }

    public setIngredients() {
        // mock des donnes des ingredients
        for (let i = 0; i < 3; i++) {
            this.ingredients[i] = new tableauNutrition();
        }
    }
}
