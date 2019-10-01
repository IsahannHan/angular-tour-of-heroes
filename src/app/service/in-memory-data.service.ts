import { Injectable } from '@angular/core';
import { Hero } from '../models/hero'
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PowerType, Power } from '../models/power';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const powers = [
      { id: 11, description: 'Fire ball', duration: 5, type: PowerType.F},
      { id: 12, description: 'Fire wave', duration: 10, type: PowerType.F},
      { id: 14, description: 'Fire bolt', duration: 2, type: PowerType.F},
      { id: 15, description: 'Water bolt', duration: 3, type: PowerType.W},
      { id: 16, description: 'Tornado', duration: 2, type: PowerType.A},
      { id: 17, description: 'Rock slide', duration: 2, type: PowerType.E}
    ];

    return {heroes, powers};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId<T extends Hero | Power>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
