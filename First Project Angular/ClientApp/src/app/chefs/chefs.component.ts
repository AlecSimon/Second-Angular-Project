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

  addChef: false;

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

  add(firstName: string, lastName: string, month: number, day: number, year: number): void {
    firstName = firstName.trim()
    lastName = firstName.trim()
    if(!firstName) { return; }
    if(!lastName) { return; }
    this.chefService.addEntry({ firstName, lastName, month, day, year } as Chef)
      .subscribe(chef => {this.chefs.push(chef);});

  }

  delete(chef: Chef): void {
    this.chefs = this.chefs.filter(h => h !== chef);
    this.chefService.deleteChef(chef).subscribe();
  }

}
