import { Component, OnInit } from '@angular/core';
import { Chef } from '../chef';
import { ChefService } from '../chef.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {

  chefs: Chef[]

  selectedChef: Chef;

  constructor(private chefService: ChefService) { }

  ngOnInit() {
    this.getChefs();
  }

  getChefs(): void {
    this.chefService.getChefs()
      .subscribe(chefs => this.chefs = chefs);
  }

  onSelect(chef: Chef): void {
    this.selectedChef = chef;
  }

}
