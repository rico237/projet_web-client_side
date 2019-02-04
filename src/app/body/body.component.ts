import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-body",
    templateUrl: "./body.component.html",
    styleUrls: ["./body.component.css"]
})
export class BodyComponent implements OnInit {

    public ingredientsResult;

    constructor() {
    }

    public ngOnInit() {
    }

    public retrieveIngredientsResult(event): void {
        this.ingredientsResult = event;
    }
}
