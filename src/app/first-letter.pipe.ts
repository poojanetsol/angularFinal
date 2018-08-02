import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'firstLetter'})
export class FirstLetter implements PipeTransform {

  transform(value: string): string {
      return (!!value) ? value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() : '';
  }
}