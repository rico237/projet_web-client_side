import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../../../services/recipe.service";

@Component({
    selector: "app-recette-detail",
    templateUrl: "./recette-detail.component.html",
    styleUrls: ["./recette-detail.component.css"]
})
export class RecetteDetailComponent implements OnInit {

    private productId = null;

    public recipe = null;

    constructor(
        private activatedRoute: ActivatedRoute,
        private recipeService: RecipeService
    ) {
    }

    public ngOnInit() {
        this.productId = this.activatedRoute.snapshot.params["id"];
        this.recipeService.getRecipe(this.productId).subscribe((response) => {
            this.recipe = response;
            console.log(response);
        });
    }

}
