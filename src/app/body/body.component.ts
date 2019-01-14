import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-body",
    templateUrl: "./body.component.html",
    styleUrls: ["./body.component.css"]
})
export class BodyComponent implements OnInit {

    @Input() public searchResult: any;

    constructor() {
    }

    public ngOnInit() {
    }

}
