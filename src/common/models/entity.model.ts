import { EntityInterface } from '../interfaces/entity.interface';

export class EntityModel implements EntityInterface {
  id: number;
  title: string;
  subtitle: string;

  constructor(params: EntityInterface = {} as EntityInterface) {
    this.id = params.id;
    this.title = params.title;
    this.subtitle = params.subtitle;
  }
}
