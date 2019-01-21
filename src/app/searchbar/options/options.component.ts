import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { SearchOptions } from "../../../business/search-options";
import { OptionsService } from "../../../services/options.service";

@Component({
    selector: "app-searchbar-options",
    templateUrl: "./options.component.html",
    styleUrls: ["./options.component.css"]
})
export class OptionsComponent implements OnInit {

    @Output() public optionsEvent: EventEmitter<any> = new EventEmitter<any>();

    @Input() public searchOptions: SearchOptions[];

    constructor(
        public optionsService: OptionsService
    ) {
    }

    public ngOnInit(): void {
        this.searchOptions = this.optionsService.initOptions();
    }

    public updateOption(searchOption: SearchOptions) {
        this.searchOptions.forEach((option: SearchOptions) => {
            if (option === searchOption) {
                option.isChecked = !searchOption.isChecked;
            }
        });

        this.optionsEvent.emit(this.searchOptions);
    }
}
