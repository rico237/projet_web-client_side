import { Component, OnInit } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SearchOptions } from "../business/search-options";
import { OptionsService } from "../services/options.service";
import * as _ from "lodash";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    public title = "projet-web-client-side";

    public searchResult: any;

    public opened: boolean;

    public faTimes = faTimes;

    public searchOptions: SearchOptions[] = [];

    public toto;

    constructor(
        public optionsService: OptionsService
    ) {

    }

    public ngOnInit(): void {
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

    public retrieveSearchResult(event: any) {
        this.searchResult = event;
    }

    public retrieveOptions(event: any) {
        this.searchOptions = event;
    }
}
