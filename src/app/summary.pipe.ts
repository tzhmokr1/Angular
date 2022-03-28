import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value) {
            return null;
        }

        // tslint:disable-next-line: prefer-const
        let actualLimit = (limit) ? limit : 50;
        return value.slice(0, actualLimit);
    }
}
