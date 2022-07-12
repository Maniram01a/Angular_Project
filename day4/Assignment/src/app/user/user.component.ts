import { Component, OnInit } from '@angular/core';
import { usres } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users = usres;

  constructor() { }

  ngOnInit(): void {
  }

}
