import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-recipe",
    templateUrl: "./recipe.component.html",
    styleUrls: ["./recipe.component.css"]
})
export class RecipeComponent implements OnInit {
    @Input() public searchResult: string[];

    public name: string;
    public intro: string;
    public ingredients: string[];

    constructor() {

    }

    public ngOnInit() {
        this.getName();
        this.getIntro();
        this.getIngredients();
    }

    public getName() {
        this.name = "Raclette";
    }

    public getIngredients() {
        this.ingredients = [];
        this.ingredients.push("Fromage");
        this.ingredients.push("Patate");
        this.ingredients.push("Charcuterie");
        // console.log(this.ingredients)
    }

    public getIntro() {
        this.intro = "Dayum intro";
    }

}
