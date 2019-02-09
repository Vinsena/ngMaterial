import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { StubData } from '../../../stubData/stubData';
import { EntitiesListModel } from '@core/models/entitiesList.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ENTITIES_PROVIDER, IEntityProvider } from '@core/entity-provider/entity-provider';
import { EntityModel } from '@core/models/entity.model';
import { Subscription } from 'rxjs/index';


interface EntityListItem {
  entity: EntityModel;
  selected: boolean;
}

@Component({
  selector: 'edit-entities-list',
  templateUrl: './edit-entities-list.component.html',
  styleUrls: ['./edit-entities-list.component.scss']
})
export class EditEntitiesListComponent implements OnDestroy {

  listId: number;
  title: string;
  searchQuery: string;
  foundEntities: EntityListItem[] = [];

  private searchSubscription: Subscription;
  private initSubscription: Subscription;
  private previousValueForSearch: string;
  private selectedEntitiesIds: number[] = [];


  constructor(private router: Router, activeRoute: ActivatedRoute, @Inject(ENTITIES_PROVIDER) private providerService: IEntityProvider) {
    this.listId = Number.parseInt(activeRoute.snapshot.paramMap.get('listId'));
    this.fillListData();
    this.search('');
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
    this.initSubscription.unsubscribe();
  }

  private fillListData() {
    this.initSubscription = this.providerService.getEntitiesList(this.listId).subscribe(list => {
      this.title = list.title;
      this.selectedEntitiesIds = list.entities;
    });
  }

  private fillFoundEntities(entities: EntityModel[]) {
    this.foundEntities = entities.map(entity => {
      const selected = this.selectedEntitiesIds.indexOf(entity.id) > -1;
      return { entity, selected };
    });
  }

  private search(queryString: string) {
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

  onSwitchSelection(item) {
    const index = this.selectedEntitiesIds.indexOf(item.entity.id);
    if (index > -1) {
      this.selectedEntitiesIds.splice(index, 1);
    } else {
      this.selectedEntitiesIds.push(item.entity.id);
    }
    console.log(this.selectedEntitiesIds);
  }

  onKeyUp() {
    const queryString = this.searchQuery.trim();
    this.search(queryString);
  }

  save() {
    this.providerService.setConnectedEntities(this.listId, this.selectedEntitiesIds);
    this.router.navigate(['/main']);
  }
}
