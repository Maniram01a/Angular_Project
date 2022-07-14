import { Injectable } from '@angular/core';
import {  Gamesdata } from '../Models/game';
import { games } from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  getGameList() : Gamesdata[] {

    return games;
  }
}
