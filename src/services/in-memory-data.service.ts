import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from 'src/models/hero';
import { HEROES } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor(private http : HttpClient) { }
  createDb() {return HEROES;
  }
  getHeroes() : Observable<Hero>[] {
    this.http.get<Hero[]>(this.heroesUrl);
  }
}
