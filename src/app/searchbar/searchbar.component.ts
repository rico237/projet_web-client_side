import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FoodService } from "../../services/food.service";
import { catchError, switchMap, tap } from "rxjs/internal/operators";
import { flatMap } from "rxjs/operators";

const recettes: string[] = [
    "Raclette",
    "Poulet au curry",
    "Boeuf bourguignon",
    "Daube",
    "Quenelles",
    "Cake au jambon",
    "Petits fours au fromage",
    "Magret de canard",

    "Saumon à la crème",
    "Melon nature",
    "Moules au vin blanc",
    "Gratin de pommes de terre",
    "Tarte au citron",
    "Tarte au citron meringué",
    "Tartiflette",
];

@Component({
    selector: "app-searchbar",
    templateUrl: "./searchbar.component.html",
    styleUrls: ["./searchbar.component.css"]
})
export class SearchbarComponent {

    public faCog = faCog;

    public faTimes = faTimes;

    public typo: any;

    public isOptionsOpened: boolean = false;

    public searching = false;
    public searchFailed = false;

    public isEmptySearch = false;

    constructor(private foodService: FoodService) {
    }

    public search = (text: Observable<string>) =>
        text.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            tap(() => this.searching = true),
            switchMap((term) =>
                this.foodService.searchFood(term).pipe(
                    tap((result) => {
                        this.searchFailed = false;
                        if (result.length === 0) {
                            this.isEmptySearch = true;
                        } else {
                            this.isEmptySearch = false;
                        }
                    }),
                    catchError(() => {
                        this.searchFailed = true;
                        return of([]);
                    }))
            ),
            tap(() => this.searching = false)
        )

    /**
     *
     */
    public openPanel(): void {
        this.isOptionsOpened = true;
    }

    public closePanel(): void {
        this.isOptionsOpened = false;
    }
}
