import { Injectable } from "@angular/core";
import { SearchOptions } from "../business/search-options";
import { options } from "../business/options";

@Injectable()
export class OptionsService {
    public initOptions(): SearchOptions[] {
        let searchOptions: SearchOptions[] = [];

        options.forEach((option) => {
            const searchOption = new SearchOptions();
            searchOption.name = option;
            searchOptions.push(searchOption);
        });

        return searchOptions;
    }
}
