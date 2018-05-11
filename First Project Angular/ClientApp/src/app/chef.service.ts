import { Injectable } from '@angular/core';
import { Chef } from './chef';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ChefService {

  private chefsUrl = 'api/chefs';

  getChefs(): Observable<Chef[]> {
    return this.http.get<Chef[]>(this.chefsUrl)
  }

  constructor(private http: HttpClient) { }

}
