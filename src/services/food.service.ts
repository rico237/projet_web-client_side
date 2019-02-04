import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/internal/operators";

@Injectable()
export class FoodService {

    /**
     * FoodService constructeur
     * @param {HttpClient} http
     */
    constructor(private http: HttpClient) {
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
                console.log(response);
                const message: string[] = response["testProducts"];
                return message.filter((v) => {
                    return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
                }).slice(0, 10);
            }));
    }

    public searchFoodWithFilters(term: string, filters: string[]) {
        // return this.http.post();
    }
}
