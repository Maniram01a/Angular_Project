import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cost'
})
export class CostPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value >20000 ? 'highest price' :'low price';
  }

}
