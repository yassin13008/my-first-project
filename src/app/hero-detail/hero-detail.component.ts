import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/models/hero';
import { HeroService } from 'src/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero : Hero = new Hero();

  constructor(
    private route : ActivatedRoute,
    private heroService : HeroService) {

  }

ngOnInit(): void {
  this.route.params.subscribe((params) => {
let id = params['id'];
this.heroService.getHero(id).subscribe((data)=> {
  console.log(data);
  this.hero = data
});
console.log(id)
  });
}

  onSubmit() {
    console.log(this.hero)
  }


}
