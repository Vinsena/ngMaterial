import { Observable } from 'rxjs/index';
import { InjectionToken } from '@angular/core';

import { EntityModel } from '@entity/models/entity.model';
import { EntitiesListModel } from '@entity/models/entities-list.model';


export let ENTITIES_PROVIDER = new InjectionToken<IEntityProvider>('entity.provider');

export interface IEntityProvider {
  search(query?: string): Observable<EntityModel[]>;

  getEntitiesList(id: number): Observable<EntitiesListModel>;

  getAllEntitiesLists(): Observable<EntitiesListModel[]>;

  setConnectedEntities(id: number, entities: number[]): Observable<boolean>;
}
