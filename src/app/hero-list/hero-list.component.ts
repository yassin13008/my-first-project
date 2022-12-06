import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/models/hero';
import { HeroService } from 'src/services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes : Hero[] = []

  constructor(private heroService : HeroService) {

  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((data)=> {
      console.log(data);
      this.heroes = data;
    })
}

}
