import { Pipe, PipeTransform } from '@angular/core';
import { Gamesdata } from '../Models/game';
import { games } from '../services/mockdata';

@Pipe({
  name: 'pageFilter'
})
export class PageFilterPipe implements PipeTransform {

  transform(games: Gamesdata[], filterText : string): Gamesdata[] {
    return filterText ? games.filter(game => game.name.toLowerCase().indexOf(filterText) > -1) : games;
  }

}
