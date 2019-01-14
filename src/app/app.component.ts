import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    public title = "projet-web-client-side";

    public searchResult: any;

    public retrieveSearchResult(event: any) {
        this.searchResult = event;
    }
}
