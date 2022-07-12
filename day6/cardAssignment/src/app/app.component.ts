import { Component, OnInit } from '@angular/core';
import { countries } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cardAssignment';
  countries = countries;
  

  ngOnInit(): void {
    
    console.log(countries[0].languages);
  }
 
  
}
