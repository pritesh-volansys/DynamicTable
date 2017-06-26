import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortenValue'
})
export class ShortenColumnVal implements PipeTransform {
    transform(value: any, limit: number) {
        if (typeof value === 'string') {
            if (value.length > limit) {
                return value.substr(0, limit) + ' ...';
            }
        }
        return value;

    }
}
