import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/internal/operators";

@Injectable()
export class RecipeDetailsService {

    /**
     * RecipeDetailsService constructeur
     * @param {HttpClient} http
     */
    constructor(private http: HttpClient) {
    }

    /**
     * Recherche parmi les criteres
     * @param {string} criteria
     * @returns {Observable<any>}
     */
    public searchFood(criteria: string): Observable<any> {
        if (criteria === "") {
            return of([]);
        }

        return this.http.get("https://projet-web-ihm.herokuapp.com/products/test")
            .pipe(map((response: Object) => {
                const message: string[] = response["message"];
                return message.filter((v) => v.toLowerCase().indexOf(criteria.toLowerCase()) > -1).slice(0, 10);
            }));
    }
}
 // allergens_from_ingredients
