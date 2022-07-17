import { Component, OnInit, Pipe } from '@angular/core';
import { countries } from './user';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
 // @Pipe({name: 'keys'})
  title = 'cardAssignment';
  countries = countries;
  data:any
  

  ngOnInit(): void {
    
   

  }
 
  
}
