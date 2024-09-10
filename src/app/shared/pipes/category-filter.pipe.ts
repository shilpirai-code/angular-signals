import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../models/item';

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {

  transform(items: Item[], searchWord: string): Item[] {
    return items.filter(item => item.type.toLowerCase() == searchWord);
  }

}
