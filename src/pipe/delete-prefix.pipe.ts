import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "deletePrefix"})
export class DeletePrefixPipe implements PipeTransform {
    public transform(value: string, prefix: string): any {
        if (value) {
            let regex = new RegExp(prefix, "gi");
            return value.replace(regex, " ");
        } else {
            return "Pas d'allergens";
        }
    }
}
