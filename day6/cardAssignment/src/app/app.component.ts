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
    
   
  //     //var val:any = (countries[0].languages);
      
  //      // var myObj:any = JSON.parse(countries);
  //   // x = myObj.name;
  //     console.log(countries[0].languages['eng']);
    
   
  // //  console.log("h"+val[Object.keys(val)[0]]);
  //   //console.log(Object.values[countries]['language']);
  //   //obj[Object.keys(obj)[0]]
  }
 
  
}
