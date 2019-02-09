import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { forkJoin } from 'rxjs';

import { EntityService } from '../../../common/services/entity.service';
import { DataHelper } from '../../../common/helpers/data.helper';
import { EntityModel } from '../../../common/models/entity.model';
import { EntityListModel } from '../../../common/models/entity-list.model';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss'],
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
export class EntityListComponent {
  entityByID: Map<number, EntityModel>;
  entityListByID: Map<number, EntityListModel>;

  readonly showStatusByListID: Map<number, boolean> = new Map<number, boolean>();

  constructor(private readonly router: Router,
              private readonly entityService: EntityService) {
    this.getData();
  }

  open(id: number): void {
    this.router.navigate([ `/entity/${id}` ]);
  }

  toggle(id: number, status: boolean = !this.showStatusByListID.get(id)): void {
    this.showStatusByListID.set(id, status);
  }

  private getData(): void {
    forkJoin<EntityModel[], EntityListModel[]>([
      this.entityService.search(),
      this.entityService.getAllEntities()
    ]).subscribe(
      (data: [ EntityModel[], EntityListModel[] ]): void => {
        this.entityByID = DataHelper.modelArrayToMap<number, EntityModel>(data[0]);
        this.entityListByID = DataHelper.modelArrayToMap<number, EntityListModel>(data[1]);
      },
      (reason: string): void => {
        // Todo: Modal window with reason?
        console.error(reason);
      }
    );
  }
}
