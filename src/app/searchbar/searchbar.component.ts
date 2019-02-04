import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Observable, of } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FoodService } from "../../services/food.service";
import { catchError, switchMap, tap } from "rxjs/internal/operators";
import { SearchOptions } from '../../business/search-options';
import * as _ from 'lodash';
import { OptionsService } from '../../services/options.service';

@Component({
    selector: "app-searchbar",
    templateUrl: "./searchbar.component.html",
    styleUrls: ["./searchbar.component.css"]
})
export class SearchbarComponent implements OnInit {

    public faCog = faCog;

    @Input() public sidenav;

    public typo: any;

    public searching = false;

    public searchFailed = false;

    public isEmptySearch = false;

    public isOpenedMenu: boolean = false;

    @Output() public searchEvent: EventEmitter<any> = new EventEmitter<any>();

    public searchOptions: SearchOptions[] = [];


    constructor(private foodService: FoodService, public optionsService: OptionsService) {
    }

    public ngOnInit() {
        this.optionsService.getOptions().subscribe((option) => {
            const tmpAllergens = option.allergens;
            let allArray = [];

            tmpAllergens.forEach((allergen) => {
                const lowerAllergen = allergen.toLowerCase();

                const tmpArray = lowerAllergen.split(", ");

                tmpArray.forEach((array) => {
                    allArray  = allArray.concat(array);
                });

            });

            allArray = _.uniq(allArray);

            let finalArray: SearchOptions[] = [];

            allArray.forEach((value) => {
                const searchOption: SearchOptions = new SearchOptions();
                searchOption.name = value;
                searchOption.isChecked = false;
                finalArray.push(searchOption);
            });

            this.searchOptions = finalArray;
        });
    }

    public search = (text: Observable<string>) =>
        text.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            tap(() => this.searching = true),
            switchMap((term) =>
                this.foodService.searchFood(term, this.retrieveComputedOptions()).pipe(
                    tap((result) => {
                        this.searchEvent.emit(result);
                        this.searchFailed = false;
                        this.isEmptySearch = result.length === 0;
                    }),
                    catchError((error) => {
                        this.searchFailed = true;
                        return of([]);
                    }))
            ),
            tap(() => this.searching = false)
        )

    public retrieveOptions(event: any) {
        this.searchOptions = event;
    }

    public submit(): void {
    }

    private retrieveComputedOptions(): string[] {
        let options: string[] = [];
        this.searchOptions.forEach((option: SearchOptions) => {
            if (option.isChecked) {
                options.push(option.name);
            }
        });

        return options;
    }
}
