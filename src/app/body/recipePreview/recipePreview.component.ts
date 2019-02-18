import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FoodDetailStoreService } from "../../../services/storage/food-detail.store.service";
import { LocalStoreService } from '../../../services/storage/local-store.service';

@Component({
    selector: "app-recipePreview",
    templateUrl: "./recipePreview.component.html",
    styleUrls: ["./recipePreview.component.scss"]
})
export class RecipePreviewComponent implements OnInit {
    @Input() public searchResult: string[];

    public name: string;
    public intro: string;
    public ingredients: string[];
    public imgSrc: boolean;

    constructor(
        private router: Router,
        private foodDetailStoreservice: FoodDetailStoreService,
        private localStoreService: LocalStoreService) {

    }

    public ngOnInit() {
        this.getName();
        this.getIngredients();
        this.getIntro();
        this.getImg("");

        this.localStoreService.setRoute("/home");
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
            this.intro += " " + ing;
        }
    }

    public getImg(src) {
        this.imgSrc = src ? src : "./../../../assets/img/notFound.png";
    }

    public routeDetailProduct(detailRoute, productInfos) {
        this.foodDetailStoreservice.setFoodInfos(productInfos);
        this.router.navigate([detailRoute + productInfos._id]);
    }
}
