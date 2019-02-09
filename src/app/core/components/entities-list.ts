import { EntityModel } from '@core/models/entity.model';

export interface EntitiesList {
  id: number;
  entities: EntityModel[];
  show: boolean;
}
