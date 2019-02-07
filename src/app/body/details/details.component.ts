import { Component, OnInit } from '@angular/core';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { FoodDetailStoreService } from '../../../services/storage/food-detail.store.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    public recipeName: string;
    public ingredients: IngredientComponent[];

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
        for (let i = 0; i < 5; i++) {
            this.ingredients[i] = new IngredientComponent();
        }
    }
}
