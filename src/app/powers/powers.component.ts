import { Component, OnInit, ViewChild } from '@angular/core';
import { Power, PowerType } from '../models/power'
import { PowerService } from '../service/power.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  columnsToDisplay: string[] = ['id', 'description', 'duration', 'type', 'actions'];
  powersList = new MatTableDataSource<Power>();
  powerType = PowerType;

  // Constructor/Init
  constructor(private powerService: PowerService) {

  }

  ngOnInit() {
    this.powersList.sort = this.sort;
    this.powersList.paginator = this.paginator;

    this.getPowers();
  }

  // Methods

  getPowers(): void {
    this.powerService.getPowers()
      .subscribe(
        (powers: Power[]) => this.powersList.data = powers
      );
  }

  applyFilter(filterValue: string) {
    this.powersList.filter = filterValue.trim().toLowerCase();
  }

  delete(power: Power): void {
    this.powersList.data = this.powersList.data.filter(p => p !== power);
    this.powerService.deletePower(power).subscribe();
  }

}
