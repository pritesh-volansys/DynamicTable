import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FillterColumns implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      //Fillter with string
      if (typeof item[propName] === 'string') {
        if (item[propName].toUpperCase().startsWith(filterString.toUpperCase())) {
          resultArray.push(item);
        }
      }
      //Fillter with number
      else if(typeof item[propName] === 'number'){
        if (item[propName] == filterString) {
          resultArray.push(item);
        }
      }
    }
    return resultArray;
  }

}
