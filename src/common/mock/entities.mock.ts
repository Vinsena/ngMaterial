import { EntityModel } from '../models/entity.model';
import { EntityListModel } from '../models/entity-list.model';

export class EntitiesMock {
  static entities: EntityModel[] = [
    new EntityModel({
      id: 0,
      title: 'Arrivals',
      subtitle: 'BPM'
    }),
    new EntityModel({
      id: 1,
      title: 'Car Wash',
      subtitle: 'BPM'
    }),
    new EntityModel({
      id: 2,
      title: 'Maintenance',
      subtitle: 'Project'
    }),
    new EntityModel({
      id: 3,
      title: 'Customer payment',
      subtitle: 'BPM'
    }),
    new EntityModel({
      id: 4,
      title: 'Technical issues',
      subtitle: 'Project'
    }),
    new EntityModel({
      id: 6,
      title: 'Extra field 1',
      subtitle: 'Extra field 1 subtitle'
    }),
    new EntityModel({
      id: 8,
      title: 'Extra field 2',
      subtitle: 'Extra field 2 subtitle'
    })
  ];

  static lists: EntityListModel[] = [
    new EntityListModel({
      id: 0,
      title: '2016 KPI:$15M Renewal Revenue (Strategic Goal)',
      entities: [1, 3, 4]
    }),
    new EntityListModel({
      id: 1,
      title: 'Second test entities list',
      entities: [1, 2, 4, 6]
    })
  ];
}
