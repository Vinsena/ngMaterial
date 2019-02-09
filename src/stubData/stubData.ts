import { EntitiesListModel } from '@entity/models/entities-list.model';
import { EntityModel } from '@entity/models/entity.model';

export class StubData {

  static entities: EntityModel[] = [
    {
      id: 0,
      title: 'Arrivals',
      subtitle: 'BPM'
    },
    {
      id: 1,
      title: 'Car Wash',
      subtitle: 'BPM'
    },
    {
      id: 2,
      title: 'Maintenance',
      subtitle: 'Project'
    },
    {
      id: 3,
      title: 'Customer payment',
      subtitle: 'BPM'
    },
    {
      id: 4,
      title: 'Technical issues',
      subtitle: 'Project'
    },
    {
      id: 6,
      title: 'Extra field 1',
      subtitle: 'Extra field 1 subtitle'
    },
    {
      id: 8,
      title: 'Extra field 2',
      subtitle: 'Extra field 2 subtitle'
    }
  ];

  static lists: EntitiesListModel[] = [
    {
      id: 0,
      title: '2016 KPI:$15M Renewal Revenue (Strategic Goal)',
      entities: [1, 3, 4]
    } as EntitiesListModel,
    {
      id: 1,
      title: 'Second test entities list',
      entities: [1, 2, 4, 6]
    } as EntitiesListModel
  ];
}
