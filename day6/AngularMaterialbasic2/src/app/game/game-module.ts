import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameDetailsComponent } from './componenets/game-details/game-details.component';
import { GameListComponent } from './componenets/game-list/game-list.component';
import { GameComponent } from './game.component';
import {MatIconModule} from '@angular/material/icon';
import { CostPipe } from './pipes/cost.pipe';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { PageFilterPipe } from './pipes/page-filter.pipe';
import { FormsModule } from '@angular/forms';

const componenets =[
    GameDetailsComponent,
    GameListComponent,
    GameComponent,
    CostPipe,
    DefaultImagePipe,
    PageFilterPipe,
    PageFilterPipe

]

@NgModule({
    declarations: [
        ...componenets,
       
      ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule
    

  ],
  exports:[GameComponent,MatIconModule]
  
  
})
export class GameModule { }
