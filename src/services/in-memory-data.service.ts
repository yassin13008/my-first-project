import { Injectable } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from 'src/models/hero';
import { HEROES } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() { 
    return {heroes : HEROES} 
  }

  genId(heroes : Hero[]): number {
    return heroes.length > 0? Math.max(...heroes.map(hero => Number(hero.id))) + 1 : 1

  }


}
