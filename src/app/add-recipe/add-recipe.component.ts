import { Component, OnInit } from "@angular/core";
import { FoodService } from "../../services/food.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { RecipeService } from "../../services/recipe.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-add-recipe",
    templateUrl: "./add-recipe.component.html",
    styleUrls: ["./add-recipe.component.css"]
})
export class AddRecipeComponent implements OnInit {

    public images: object[] = [];

    public form: FormGroup;

    public isLoadingImages: boolean = false;

    public imageUrl: string = null;

    constructor(
        private recipeService: RecipeService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
    }

    public ngOnInit() {
        this.form = this.formBuilder.group({
            name: new FormControl("", Validators.required),
            description: new FormControl("", Validators.required),
            tags: new FormControl([], Validators.required)
        });
    }

    public controlValue(): void {
        const name = this.retrieveFormFieldValue("name");

        if (!name) {
            this.imageUrl = null;
            this.images = [];
        }
    }

    public onKeyDown(event: KeyboardEvent): void {
        if (event.keyCode === 13) {
            this.searchImage();
        }
    }

    public searchImage(): void {
        const name = this.retrieveFormFieldValue("name");

        if (name) {
            this.images = [];
            this.isLoadingImages = true;
            this.recipeService.searchImage(name).subscribe((images: object[]) => {
                this.isLoadingImages = false;
                this.images = images;
            });
        }
    }

    public selectImageUrl(url) {
        this.imageUrl = url;
    }

    public addRecipe(): void {
        const recipe = {
            nom: this.retrieveFormFieldValue("name"),
            image: this.imageUrl,
            description: this.retrieveFormFieldValue("description"),
            tags: this.retrieveFormFieldValue("tags").map((t) => t.value)
        };

        this.recipeService.createRecipe(recipe).subscribe((response) => {
            this.router.navigate(["/recettes/" + response.recipe._id]);
        });
    }

    /**
     * Récupère la valeur du champ dans le formulaire
     * @param {string} field Champ à récupérer
     * @returns {string} Valeur du champ
     */
    private retrieveFormFieldValue(field: string): any {
        return this.form.controls[field].value;
    }
}
