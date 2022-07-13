import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false, // warning: may lead to performance issues!
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string) {
    // sort function returns 1 (greater than) or -1 (less than), or 0 (equal)
    return value.sort((a: any, b: any) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
