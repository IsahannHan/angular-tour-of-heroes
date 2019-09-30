import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../../models/hero';
import { HeroService } from '../../service/hero.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroFormControl = new FormControl('', [
    Validators.required
  ])

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  // Methods

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id !== 0) {
      this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    } else {
      this.hero = new Hero;
    }
  }

  save(): void {
    if (this.hero.id !== undefined) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    } else {
      this.heroService.addHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

}
