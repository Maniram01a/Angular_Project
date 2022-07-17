import { Component, OnInit } from '@angular/core';
import { Gamesdata } from '../../Models/game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games:Gamesdata[]= [];
  showImage = true;
  filterText = " ";
  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGameList();
  }
  toggleImage(){
    this.showImage = !this.showImage;
  }

  handleratingClick(message:string){
    console.log('message',message);
  }
}
