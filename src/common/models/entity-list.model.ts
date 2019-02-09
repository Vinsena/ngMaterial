import { EntityListInterface } from '../interfaces/entity-list.interface';

export class EntityListModel implements EntityListInterface {
  id: number;
  title: string;
  entities: number[];

  constructor(params: EntityListInterface = {} as EntityListInterface) {
    this.id = params.id;
    this.title = params.title;
    this.entities = params.entities;
  }
}
