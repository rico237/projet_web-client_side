import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/internal/operators";
import { FoodStoreService } from './storage/food.store.service';

@Injectable()
export class FoodService {

    /**
     * FoodService constructeur
     * @param {HttpClient} http
     * @param foodStoreService
     */
    constructor(private http: HttpClient, private foodStoreService: FoodStoreService) {
    }

    /**
     * Recherche de la nourriture
     * @param {string} term
     * @param options
     * @returns {Observable<any>}
     */
    public searchFood(term: string, options: string[]): Observable<any> {
        if (term === "") {
            return of([]);
        }

        const data = {
            productName: term,
            tabs: options
        };

        return this.http.post("https://projet-web-ihm.herokuapp.com/products/find_allergens/ingredients", data)
            .pipe(map((response: Object) => {
                const products = response["products"];
                this.foodStoreService.setFood(products);

                let ingredients = [];

                products.forEach((product) => {
                    ingredients.push(product.product_name);
                });

                return ingredients.filter((v) => {
                    return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
                }).slice(0, 10);
            }));
    }

    public searchFoodWithFilters(term: string, filters: string[]) {
        // return this.http.post();
    }

    public searchImage(name: string): Observable<any> {
        return this.http.post("https://projet-web-ihm.herokuapp.com/products/images", {productName: name, limit: 4});
    }

    public retrieveNutriScore(score) {
        const nutriScores = [
            {
                score: "a",
                img: "../assets/img/nutri-scores/nutriscore-a.png"
            },
            {
                score: "b",
                img: "../assets/img/nutri-scores/nutriscore-b.png"
            },
            {
                score: "c",
                img: "../assets/img/nutri-scores/nutriscore-c.png"
            },
            {
                score: "d",
                img: "../assets/img/nutri-scores/nutriscore-d.png"
            },
            {
                score: "e",
                img: "../assets/img/nutri-scores/nutriscore-e.png"
            },
        ];

        return nutriScores.find((s) => {
            return s.score === score;
        });
    }

    getStores(productId) : Observable<any> {
        console.log("getting stores")
        return this.http.get("https://projet-web-ihm.herokuapp.com/products/5c658547d903a34c306ee7ea/price",productId)
    }
}
