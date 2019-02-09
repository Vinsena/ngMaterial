import { Component, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { ENTITIES_PROVIDER, IEntityProvider } from '@core/interfaces/entity-provider';
import { forkJoin } from 'rxjs/index';

import { EntitiesListModel } from '@core/models/entities-list.model';
import { EntityModel } from '@core/models/entity.model';
import { EntitiesList } from '@core/components/entities-list';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  lists: EntitiesList[];

  constructor(private router: Router,
              @Inject(ENTITIES_PROVIDER) private providerService: IEntityProvider) {
    this.lists = [];
    this.loadData();
  }

  loadData(): void {
    forkJoin([
      this.providerService.getAllEntitiesLists(),
      this.providerService.search()
    ]).subscribe(res => {

      const lists = res[0] as EntitiesListModel[];
      const entities = res[1] as EntityModel[];

      this.lists = lists.map(list => {
        return {
          id: list.id,
          entities: entities.filter(en => list.entities.indexOf(en.id) > -1),
          show: false
        } as EntitiesList;
      });
    });
  }

  open(id: number): void {
    this.router.navigate([`/entities/${id}`]);
  }
}
