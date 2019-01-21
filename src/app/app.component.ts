import { Component, OnInit } from "@angular/core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SearchOptions } from "../business/search-options";
import { OptionsService } from '../services/options.service';

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

    constructor(
        public optionsService: OptionsService
    ) {

    }

    public ngOnInit(): void {
        this.searchOptions = this.optionsService.initOptions();
    }

    public retrieveSearchResult(event: any) {
        this.searchResult = event;
    }

    public retrieveOptions(event: any) {
        this.searchOptions = event;
    }
}
