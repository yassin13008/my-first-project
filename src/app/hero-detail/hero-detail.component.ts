import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/models/hero';
import { HeroService } from 'src/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero = new Hero();

  isSuccess: boolean = false;
  isLoading: boolean = false

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.heroService.getHero(id).subscribe((data) => {
        console.log(data);
        this.hero = data
      });
      console.log(id)
    });
  }

  onSubmit(ngForm: NgForm) {
    if (!ngForm.valid) {
      //  Si la valid est négative
      return
    }
    if (this.hero.id == null) {
      // création
      this.hero.id = Math.random();
      this.isSuccess = false;
      this.isLoading = true;
      this.heroService.postHero(this.hero).subscribe((data)=> {
        console.log('Ok Post');
        console.log(data);
        this.hero = data;
        this.isSuccess= true;
        this.isLoading = false;
      });
    }

    else {
      //  Modification 
      this.isSuccess = false;
      this.isLoading = true;
      this.heroService.putHero(this.hero).subscribe((data) => {

        console.log('Ok Put')
        this.isSuccess = true;
        this.isLoading = false;
      });
    }

  };

  onDelete() {
    this.isLoading = true;
    this.heroService.deleteHero(this.hero).subscribe((data) => {

      console.log('Ok delete')
      this.isLoading = false;
      this.router.navigate(['hero-list'])
    });
  }

}
