import { EntityModel } from '@core/models/entity.model';
import { Observable } from 'rxjs/index';
import { InjectionToken } from '@angular/core';
import { EntitiesListModel } from '@core/models/entities-list.model';

export let ENTITIES_PROVIDER = new InjectionToken<IEntityProvider>('entity.provider');

export interface IEntityProvider {
  search(query?: string): Observable<EntityModel[]>;

  getEntitiesList(id: number): Observable<EntitiesListModel>;

  getAllEntitiesLists(): Observable<EntitiesListModel[]>;

  setConnectedEntities(id: number, entities: number[]): Observable<boolean>;
}
