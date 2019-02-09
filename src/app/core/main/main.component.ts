import { Component, Inject, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EntitiesListModel} from '@core/models/entitiesList.model';
import {StubData} from '../../../stubData/stubData';
import {animate, style, transition, trigger} from '@angular/animations';
import { EntityModel } from '@core/models/entity.model';
import { ENTITIES_PROVIDER, IEntityProvider } from '@core/entity-provider/entity-provider';
import { forkJoin, Observable } from 'rxjs/index';

interface EntitiesListItem {
  id: number;
  entities: EntityModel[];
  show: boolean;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class MainComponent {

  isListShow: boolean;

  lists: EntitiesListItem[] = [];


  constructor(private router: Router, @Inject(ENTITIES_PROVIDER) private providerService: IEntityProvider) {
    forkJoin([
      this.providerService.getAllEntitiesLists(),
      this.providerService.search()
    ]).subscribe(res => {
      console.log(res);

      const lists = res[0] as EntitiesListModel[];
      const entities = res[1] as EntityModel[];

      this.lists = lists.map(list => {
        return {
          id: list.id,
          entities: entities.filter(en => list.entities.indexOf(en.id) > -1),
          show: false
        } as EntitiesListItem;
      });
    });
  }

  open(id: number) {
    this.router.navigate([`/entities/${id}`]);
  }
}
