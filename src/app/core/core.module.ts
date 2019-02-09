import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEntitiesListComponent } from './components/edit-entities-list/edit-entities-list.component';
import { MainComponent } from './components/main/main.component';

import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';

import { EntitiesProviderStubService } from '@core/services/entities-provider-stub/entities-provider-stub.service';
import { ENTITIES_PROVIDER, IEntityProvider } from '@core/interfaces/entity-provider';

@NgModule({
  declarations: [
    EditEntitiesListComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    EditEntitiesListComponent,
    MainComponent
  ],
  providers: [
    {provide: ENTITIES_PROVIDER, useClass: EntitiesProviderStubService}
  ]
})
export class CoreModule {
}
