import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EntityService } from '../../../common/services/entity.service';
import { DataHelper } from '../../../common/helpers/data.helper';
import { EntityModel } from '../../../common/models/entity.model';
import { EntityListModel } from '../../../common/models/entity-list.model';

@Component({
  selector: 'app-entity-list-editor',
  templateUrl: './entity-list-editor.component.html',
  styleUrls: [ './entity-list-editor.component.scss' ]
})
export class EntityListEditorComponent implements OnDestroy {
  listId: number;
  title: string;
  searchQuery: string;
  foundEntities: EntityModel[] = [];
  selectedEntityIds: number[] = [];
  entityListByID: Map<number, EntityListModel>;

  private searchSubscription: Subscription;
  private activatedRouteSubscription: Subscription;
  private previousValueForSearch: string;

  constructor(private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute,
              private readonly entityService: EntityService) {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe((params: Params): void => {
      if (!!params.listId) {
        this.listId = Number.parseInt(params.listId, 10);
        this.fillListData();
        this.search('');
      }
    });

    this.entityService.getAllEntities().subscribe(
      (list: EntityListModel[]): void => {
        this.entityListByID = DataHelper.modelArrayToMap<number, EntityListModel>(list);
      },
    (reason: string): void => {
        // Todo: Modal window with reason?
        console.error(reason);
      }
    );
  }

  ngOnDestroy(): void {
    this.activatedRouteSubscription.unsubscribe();
  }

  private fillListData(): void {
    this.entityService.getEntityListByID(this.listId).subscribe(
      (model: EntityListModel): void => {
        this.title = model.title;
        this.selectedEntityIds = [ ... model.entities ];
      },
      (reason: string): void => {
        // Todo: Show error?
        console.error(reason);
      }
    );
  }

  private fillFoundEntities(entities: EntityModel[] = []): void {
    this.foundEntities = entities.filter(
      (entity: EntityModel): boolean => this.selectedEntityIds.includes(entity.id)
    );
  }

  private search(queryString: string): void {
    if (this.previousValueForSearch === queryString) {
      return;
    }

    this.previousValueForSearch = queryString;

    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }

    this.searchSubscription = this.entityService.search(queryString).subscribe(
      (entities: EntityModel[]): void => {
        this.fillFoundEntities(entities);
      },
      (reason: string): void => {
        // Todo: Show error?
        console.error(reason);
      }
    );
  }

  onSwitchSelection(id: number): void {
    const index: number = this.selectedEntityIds.indexOf(id);

    if (index > -1) {
      this.selectedEntityIds.splice(index, 1);
    } else {
      this.selectedEntityIds.push(id);
    }
  }

  onInputHandler(): void {
    this.search((this.searchQuery || '').trim());
  }

  save(): void {
    this.entityService.setConnectedEntities(this.listId, this.selectedEntityIds);
    this.router.navigate([ '/main' ]);
  }
}
