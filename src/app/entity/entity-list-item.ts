import { EntityModel } from '@entity/models/entity.model';

export interface EntityListItem {
  entity: EntityModel;
  selected: boolean;
}
