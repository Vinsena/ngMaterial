import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, Observer, of } from 'rxjs';
import { EntitiesMock } from '../mock/entities.mock';
import { EntityModel } from '../models/entity.model';
import { EntityListModel } from '../models/entity-list.model';

@Injectable({ providedIn: 'root' })
export class EntityService {
  private entityLists: EntityListModel[] = [ ... EntitiesMock.lists ];

  private static isMatch(value: string, query: string) {
    return (
      !query
        ? true
        : value.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  search(query: string = ''): Observable<EntityModel[]> {
    return of<EntityModel[]>(
      EntitiesMock.entities.filter(
        (item: EntityModel): boolean => EntityService.isMatch(item.title, query) || EntityService.isMatch(item.subtitle, query)
      ) || []
    ).pipe<EntityModel[]>(
      delay<EntityModel[]>(1000)
    );
  }

  getEntityListByID(id: number): Observable<EntityListModel> {
    return Observable.create((observer: Observer<EntityListModel>): void => {
      setTimeout(
        (): void => {
          const result: EntityListModel | undefined = this.entityLists.find((item: EntityListModel): boolean => item.id === id);

          if (!!result) {
            observer.next(result);
            observer.complete();
          } else {
            observer.error(`Entity with ID ${id} not found`);
          }
        },
        1000
      );
    });
  }

  setConnectedEntities(id: number, entities: number[]): Observable<boolean> {
    return new Observable((observer: Observer<boolean>): void => {
      setTimeout(
        () => {
          const list: EntityListModel | undefined = this.entityLists.find((item: EntityListModel): boolean => item.id === id);

          if (!!list) {
            list.entities = entities;
            observer.next(true);
            observer.complete();
          } else {
            observer.error(`Entity list with ID ${id} not found`);
          }
        },
        1000
      );
    });
  }

  getAllEntities(): Observable<EntityListModel[]> {
    return of<EntityListModel[]>(this.entityLists)
      .pipe<EntityListModel[]>(
        delay<EntityListModel[]>(1000)
      );
  }
}
