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

    constructor() {
    }

    public ngOnInit(): void {

    }
}
