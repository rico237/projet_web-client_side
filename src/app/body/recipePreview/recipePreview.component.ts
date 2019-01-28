import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-recipePreview",
    templateUrl: "./recipePreview.component.html",
    styleUrls: ["./recipePreview.component.css"]
})
export class RecipePreviewComponent implements OnInit {
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
