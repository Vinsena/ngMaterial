import { Component, Inject, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityModel } from '@entity/models/entity.model';
import { Subscription } from 'rxjs/index';

import { EntityListItem } from '@entity/entity-list-item';
import { EntitiesProviderStubService } from '@entity/services/entities-provider-stub/entities-provider-stub.service';

@Component({
  selector: 'app-edit-entities-list',
  templateUrl: './edit-entities-list.component.html',
  styleUrls: ['./edit-entities-list.component.scss']
})
export class EditEntitiesListComponent implements OnDestroy {

  listId: number;
  title: string;
  searchQuery: string;
  foundEntities: EntityListItem[];

  private searchSubscription: Subscription;
  private initSubscription: Subscription;
  private previousValueForSearch: string;
  private selectedEntitiesIds: number[];


  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private providerService: EntitiesProviderStubService) {
    this.foundEntities = [];
    this.selectedEntitiesIds = [];
    this.listId = Number.parseInt(this.activeRoute.snapshot.paramMap.get('listId'), 10);
    this.fillListData();
    this.search('');
  }

  private fillListData(): void {
    this.initSubscription = this.providerService.getEntitiesList(this.listId).subscribe(list => {
      this.title = list.title;
      this.selectedEntitiesIds = list.entities;
    });
  }

  private fillFoundEntities(entities: EntityModel[]): void {
    this.foundEntities = entities.map(entity => {
      const selected = this.selectedEntitiesIds.indexOf(entity.id) > -1;
      return {entity, selected};
    });
  }

  private search(queryString: string): void {
    if (this.previousValueForSearch === queryString) {
      return;
    }
    this.previousValueForSearch = queryString;

    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
    this.searchSubscription = this.providerService.search(queryString).subscribe(result => {
      this.fillFoundEntities(result);
    });
  }

  onSwitchSelection(item: EntityListItem): void {
    const index = this.selectedEntitiesIds.indexOf(item.entity.id);
    if (index > -1) {
      this.selectedEntitiesIds.splice(index, 1);
    } else {
      this.selectedEntitiesIds.push(item.entity.id);
    }
  }

  onKeyUp(): void {
    const queryString = this.searchQuery.trim();
    this.search(queryString);
  }

  save(): void {
    this.providerService.setConnectedEntities(this.listId, this.selectedEntitiesIds);
    this.router.navigate(['/main']);
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
    this.initSubscription.unsubscribe();
  }
}
