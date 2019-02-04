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
    public imgSrc: boolean;

    constructor() {

    }

    public ngOnInit() {
        this.getName();
        this.getIngredients();
        this.getIntro();
        this.getImg("");
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
        this.intro = "";
        for (let ing of this.ingredients) {
            this.intro += " " + ing
        }
    }

    public getImg(src){
        this.imgSrc = src ? src : './../../../assets/img/notFound.png';
    }
}
