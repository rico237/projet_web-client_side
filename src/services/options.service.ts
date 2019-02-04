import { Injectable } from "@angular/core";
import { SearchOptions } from "../business/search-options";
import { options } from "../business/options";
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class OptionsService {

    constructor(private http: HttpClient) {

    }

    public getOptions(): Observable<any> {
        return this.http.get("https://projet-web-ihm.herokuapp.com/products/allergens/all");
    }
}
