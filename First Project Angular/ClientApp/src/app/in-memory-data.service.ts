import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const chefs = [
        { id: 1, firstName: 'Jim', lastName: "Bob", day: 8, month: 5, year: 2018},
        { id: 2, firstName: "Wind", lastName: "Storm", day: 15, month: 5, year: 2018},
        { id: 3, firstName: "Bad", lastName: "Order", day: 12, month: 3, year: 2018},
        { id: 4, firstName: "Simon", lastName: "Jarett", day: 14, month: 5, year: 2104}
    ];
    return {chefs};
  }
}