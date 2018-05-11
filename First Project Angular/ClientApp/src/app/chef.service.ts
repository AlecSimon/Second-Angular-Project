import { Injectable } from '@angular/core';
import { Chef } from './chef';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})

export class ChefService {

  private chefsUrl = 'api/chefs';

  getChefs(): Observable<Chef[]> {
    return this.http.get<Chef[]>(this.chefsUrl)
  }

  addEntry(chef: Chef): Observable<Chef> {
    return this.http.post<Chef>(this.chefsUrl, chef, httpOptions);
  }

  constructor(private http: HttpClient) { }

  /** DELETE: delete the hero from the server */
  deleteChef (chef: Chef | number): Observable<Chef> {
    const id = typeof chef === 'number' ? chef : chef.day;
    const url = '${this.chefsUrl}/${day}';

    return this.http.delete<Chef>(url, httpOptions)
  }

}
