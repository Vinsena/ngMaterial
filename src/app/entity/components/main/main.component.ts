import { Component, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs/index';

import { EntitiesListModel } from '@entity/models/entities-list.model';
import { EntityModel } from '@entity/models/entity.model';
import { EntitiesProviderStubService } from '@entity/services/entities-provider-stub/entities-provider-stub.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  lists: EntitiesListModel[];
  entities: {[id: number]: EntityModel};
  showStates: {[id: number]: boolean};

  constructor(private router: Router, private providerService: EntitiesProviderStubService) {
    this.lists = [];
    this.loadData();
  }

  loadData(): void {
    forkJoin([
      this.providerService.getAllEntitiesLists(),
      this.providerService.search()
    ]).subscribe(res => {

      const entities = res[1] as EntityModel[];
      this.entities = {};
      entities.forEach(item => this.entities[item.id] = item);

      this.lists = res[0] as EntitiesListModel[];
      this.showStates = {};
      this.lists.forEach(item => this.showStates[item.id] = false);
    });
  }

  open(id: number): void {
    this.router.navigate([`/entities/${id}`]);
  }
}
