import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable, of } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FoodService } from "../../services/food.service";
import { catchError, switchMap, tap } from "rxjs/internal/operators";

@Component({
    selector: "app-searchbar",
    templateUrl: "./searchbar.component.html",
    styleUrls: ["./searchbar.component.css"]
})
export class SearchbarComponent {

    public faCog = faCog;

    public faTimes = faTimes;

    @Input() public sidenav;

    public typo: any;

    public searching = false;
    public searchFailed = false;

    public isEmptySearch = false;

    @Input() public options: any;

    @Output() public searchEvent: EventEmitter<any> = new EventEmitter<any>();

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
                        console.log("hello");
                        this.searchEvent.emit(result);
                        this.searchFailed = false;
                        this.isEmptySearch = result.length === 0;
                    }),
                    catchError((error) => {
                        console.log(error);
                        this.searchFailed = true;
                        return of([]);
                    }))
            ),
            tap(() => this.searching = false)
        )

    public submit(): void {
    }
}
