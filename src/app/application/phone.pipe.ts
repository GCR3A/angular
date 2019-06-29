import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(items: any, term): any {
    return null;
    console.log('term', term);     
    return term ? 
items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1)
: items;
  }

}
