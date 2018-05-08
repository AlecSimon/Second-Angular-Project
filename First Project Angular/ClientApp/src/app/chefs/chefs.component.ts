import { Component, OnInit } from '@angular/core';
import { Chef } from '../chef';
import { CHEFS } from '../mock-chefs';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {

  chefs = CHEFS;

  constructor() { }

  ngOnInit() {
  }


}
