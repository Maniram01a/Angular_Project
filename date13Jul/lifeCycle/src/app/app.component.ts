import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges,OnInit,DoCheck{
  
 
  
  title = 'lifeCycle';
  order =1;
  constructor(){
    console.log("Constructor"+this.order);
    this.order++;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("NgOnchange"+this.order);
    this.order++;
  }
  ngOnInit(): void {
    console.log("NgOnit"+this.order);
    this.order++;
  }


  ngDoCheck(): void {
    console.log("NgDocheck"+this.order);
    this.order++;
  }
}
