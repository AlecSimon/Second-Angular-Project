import { Injectable } from '@angular/core';
import { Chef } from './chef';
import { CHEFS } from './mock-chefs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ChefService {

  getChefs(): Observable<Chef[]> {
    return of(CHEFS);
  }

  constructor() { }

}
