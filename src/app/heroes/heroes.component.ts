import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../models/hero'
import { HeroService } from '../service/hero.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;
  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  columnsToDisplay: string[] = ['id', 'name', 'actions'];

  heroesList = new MatTableDataSource<Hero>();

  // Constructor/Init
  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.heroesList.sort = this.sort;
    this.heroesList.paginator = this.paginator;

    this.getHeroes();
  }

  // Methods

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(
      (heroes: Hero[]) => this.heroesList.data = heroes
    );
  }

  applyFilter(filterValue: string) {
    this.heroesList.filter = filterValue.trim().toLowerCase();
  }

  add(name: string): void {
    name = name.trim();
    if(!name){
      return;
    }

    this.heroService.addHero({name} as Hero)
    .subscribe(
      (hero: Hero) => {
      this.heroesList.data.push(hero);
      this.heroesList._updateChangeSubscription();
    });
  }

  delete(hero: Hero): void {
    this.heroesList.data = this.heroesList.data.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
