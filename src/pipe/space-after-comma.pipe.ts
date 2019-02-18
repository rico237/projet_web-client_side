import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "spaceAfterComma"})
export class SpaceAfterCommaPipe implements PipeTransform {
    public transform(value: string, ...args: any[]): any {
        if (value) {
            const regex: any = /,/gi;
            return value.replace(regex, ", ");
        } else {
            return "Aucun";
        }
    }
}
