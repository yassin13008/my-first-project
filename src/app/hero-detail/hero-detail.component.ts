import { Component } from '@angular/core';
import { Hero } from 'src/models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {

  hero : Hero = new Hero()


}
