import { Component, OnInit } from "@angular/core";
import { IngredientComponent } from "../ingredient/ingredient.component";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  public recipeName: string;
  public ingredients: IngredientComponent[];

  constructor() {
    this.ingredients = [];
   }

  public ngOnInit() {
    this.setIngredients();
    this.recipeName = "recipeName";
  }

  public setIngredients () {
    // mock des donnes des ingredients
    for (let i = 0; i < 5; i ++) {
      this.ingredients[i] = new IngredientComponent();
    }
  }
}
