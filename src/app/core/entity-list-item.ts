import { EntityModel } from '@core/models/entity.model';

export interface EntityListItem {
  entity: EntityModel;
  selected: boolean;
}
