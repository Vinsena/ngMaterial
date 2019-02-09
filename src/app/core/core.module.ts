import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEntitiesListComponent } from './edit-entities-list/edit-entities-list.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EntitiesProviderStubService } from '@core/entities-provider-stub/entities-provider-stub.service';
import { ENTITIES_PROVIDER, IEntityProvider } from '@core/entity-provider/entity-provider';

@NgModule({
  declarations: [
    MainComponent,
    EditEntitiesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    MainComponent,
    EditEntitiesListComponent
  ],
  providers: [
    {provide: ENTITIES_PROVIDER, useClass: EntitiesProviderStubService}
  ]
})
export class CoreModule {
}
