import { Injectable } from '@angular/core';
import { Chef } from './chef';
import { CHEFS } from './mock-chefs';

@Injectable({
  providedIn: 'root',
})

export class ChefService {

  getChefs(): Chef[] {
    return CHEFS;
  }

  constructor() { }

}
