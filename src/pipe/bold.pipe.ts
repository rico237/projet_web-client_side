import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "bold"})
export class BoldPipe implements PipeTransform {
    public transform(value: string): any {
        if (value) {
            let regex = new RegExp("_([^,]*)_", "gi");
            return value.replace(regex, "<strong>$1</strong>");
        } else {
            return "";
        }
    }
}
