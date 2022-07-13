import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string) {
    // split string into array
    // reverse the array
    // join the array elements
    return value.split('').reverse().join('');
  }
}
