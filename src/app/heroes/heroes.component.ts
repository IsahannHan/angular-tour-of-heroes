import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../class/hero'
import { HeroService } from '../service/hero.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;
  columnsToDisplay: string[] = ['heroId', 'heroName', 'actions'];

  heroes = new MatTableDataSource<Hero>();

  // Constructor/Init
  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.heroes.paginator = this.paginator;
    this.getHeroes();
  }

  // Methods

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(
      (heroes: Hero[]) => this.heroes.data = heroes
    );
  }

  add(name: string): void {
    name = name.trim();
    if(!name){
      return;
    }

    this.heroService.addHero({name} as Hero)
    .subscribe(
      (hero: Hero) => {
      this.heroes.data.push(hero);
      this.heroes._updateChangeSubscription();
    });
  }

  delete(hero: Hero): void {
    this.heroes.data = this.heroes.data.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
