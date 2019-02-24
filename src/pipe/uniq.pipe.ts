import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "uniq"})
export class UniqPipe implements PipeTransform {
    public transform(value: string, separator: string = ", "): any {
        if (value) {
            const array = value.split(separator);

            const uniq = array.filter((val, index, self) => {
                return self.indexOf(val) === index;
            });

            return uniq.join(separator);
        } else {
            return "";
        }
    }
}
