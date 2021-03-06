import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';

import { IEntityProvider } from '@entity/interfaces/entity-provider';
import { EntityModel } from '@entity/models/entity.model';
import { StubData } from '../../../../stubData/stubData';
import { EntitiesListModel } from '@entity/models/entities-list.model';

@Injectable()
export class EntitiesProviderStubService implements IEntityProvider {

  private entitiesLists: EntitiesListModel[];


  constructor() {
    this.entitiesLists = StubData.lists.slice();
  }

  search(query?: string): Observable<EntityModel[]> {
    return new Observable(subscriber => {
      const found = StubData.entities
        .filter(item => this.isMatch(item.title, query) || this.isMatch(item.subtitle, query));

      setTimeout(() => {
        subscriber.next(found);
        subscriber.complete();
      }, 1000);
    });
  }

  getEntitiesList(id: number): Observable<EntitiesListModel> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(this.entitiesLists.find(item => item.id === id));
        subscriber.complete();
      }, 1000);
    });
  }

  setConnectedEntities(id: number, entities: number[]): Observable<boolean> {
    return new Observable(subscriber => {
      setTimeout(() => {
        const list = this.entitiesLists.find(item => item.id === id);
        if (!list) {
          return;
        }
        list.entities = entities;
        subscriber.next(true);
        subscriber.complete();
      }, 1000);
    });
  }

  getAllEntitiesLists(): Observable<EntitiesListModel[]> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(this.entitiesLists);
        subscriber.complete();
      }, 1000);
    });
  }

  private isMatch(value: string, query: string) {
    if (!query) {
      return true;
    }
    return value.toLowerCase().indexOf(query.toLowerCase()) > -1;
  }
}
