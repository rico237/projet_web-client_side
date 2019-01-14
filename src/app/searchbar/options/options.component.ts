import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-searchbar-options",
    templateUrl: "./options.component.html",
    styleUrls: ["./options.component.css"]
})
export class OptionsComponent implements OnInit {

    @Input() public isOptionsOpened: boolean = false;

    public options = {
        bio: false,
        vegan: false,
        withoutAdditifs: false
    };

    constructor() {
    }

    public ngOnInit() {
    }

    public updateOption(toto: string) {
        this.options[toto] = !this.options[toto];
        console.log(this.options);
    }
}
