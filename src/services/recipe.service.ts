import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FoodStoreService } from "./storage/food.store.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RecipeService {

    constructor(private http: HttpClient) {
    }

    public searchImage(name: string): Observable<any> {
        return this.http.post("https://projet-web-ihm.herokuapp.com/products/images", {productName: name, limit: 4});
    }

    public createRecipe(recipe) {
        return this.http.post("https://projet-web-ihm.herokuapp.com/recipes/create", recipe);
    }

    public getRecipe(id: string) {
        return this.http.get("https://projet-web-ihm.herokuapp.com/recipes/" + id);
    }
}
