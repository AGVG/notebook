import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], query: string, value: string): any[] {
    if (!items) {
      return [];
    }

    return items.filter((it) => {
      if (value && query) {
        return it.name.includes(value) && it.genre.includes(query);
      } else if (value){
        return it.name.includes(value);
      } else if (query){
        return it.genre.includes(query)
      } else {
        return true;
      }
    });
  }
}
