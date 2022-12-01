import { Injectable } from '@angular/core';
import { Hero } from 'src/models/hero';


const Heroes : Hero[] = [
  { id: 1, name: 'Ugo' },
  { id: 2, name: 'Stéphane' },
  { id: 3, name: 'Hafsa' },
  { id: 4, name: 'Nassim' },
  { id: 5, name: 'Paul' },
  { id: 6, name: 'Youssef' },
  { id: 7, name: 'Ewan' },
  { id: 8, name: 'Tristan' },
  { id: 9, name: 'Zinedine' },
  { id: 10, name: 'Jules' },
  { id: 11, name: 'Yassin' },
  { id: 12, name: 'Hussain' },
  { id: 13, name: 'Gilles' },
  { id: 14, name: 'Alina' },
  { id: 15, name: 'Emmanuel' },
  { id: 16, name: 'Alicia' },
  { id: 17, name: 'Killian' },
  { id: 18, name: 'Angélique' },
  { id: 19, name: 'Gwendal' },
  { id: 20, name: 'Céline' },
  { id: 21, name: 'Quentin' },
  { id: 22, name: 'Alois' },
  { id: 23, name: 'Charlotte' },
  { id: 24, name: 'Jamy' },
  { id: 25, name: 'Bastien' },
  { id: 26, name: 'Léo' },
  { id: 27, name: 'Cassandre' },
  
];


@Injectable({
  providedIn: 'root'
})


export class HeroService {

  constructor() { }

  getHeroes() : Hero[] {
return Heroes
  }
}
