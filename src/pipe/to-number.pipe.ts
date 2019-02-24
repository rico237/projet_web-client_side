import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "toNumber"})
export class ToNumberPipe implements PipeTransform {
    public transform(value: string): any {
        if (value) {
            try {
                let finalValue = parseFloat(value);
                finalValue = Math.round(finalValue * 100) / 100;

                return finalValue.toFixed(2);
            } catch (exception: any) {
                return value;
            }
        } else {
            return "";
        }
    }
}
