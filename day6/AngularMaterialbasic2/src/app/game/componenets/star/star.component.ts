import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges{
  @Input() rating: number = 0; // input method
  @Output() ratingClicked = new EventEmitter();
  totalStarwidth=120; // 1 star width is 24 then 24*5 is equal to 120
  starwidth = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change",changes);
    if(this.rating)
    {
     this.starwidth = 24 * this.rating;
    }
  }

  ngOnInit(): void {
  }

  public ratinkgStarClick():void{
    this.ratingClicked.emit(`the rating ${this.rating} was clicked`)
  }

}
