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
     * @returns {Observable<any>}
     */
    public searchFood(term: string): Observable<any> {
        if (term === "") {
            return of([]);
        }

        return this.http.get("https://projet-web-ihm.herokuapp.com/foodsDev")
            .pipe(map((response: Object) => {
                const message: string[] = response["message"];
                return message.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
            }));
    }
}
