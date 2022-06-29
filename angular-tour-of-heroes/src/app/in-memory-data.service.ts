import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'C.Baille' },
      { id: 2, name: 'P.Mauvaka' },
      { id: 3, name: 'D.Aldegheri' },
      { id: 4, name: 'Ri.Arnold' },
      { id: 5, name: 'E.Meafou' },
      { id: 6, name: 'S.Tolofua' },
      { id: 7, name: 'F.Cros' },
      { id: 8, name: 'A.Miquel' },
      { id: 9, name: 'A.Dupont' },
      { id: 10, name: 'T.Ramos' },
      { id: 11, name: 'M.Lebel' },
      { id: 12, name: 'R.Ntamack' },
      { id: 13, name: 'Z.Holmes' },
      { id: 14, name: 'S.Guitoune' },
      { id: 15, name: 'M. Medard' },

    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}