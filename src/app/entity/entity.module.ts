import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEntitiesListComponent } from './components/edit-entities-list/edit-entities-list.component';
import { MainComponent } from './components/main/main.component';

import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EntitiesProviderStubService } from '@entity/services/entities-provider-stub/entities-provider-stub.service';

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
    EntitiesProviderStubService
  ]
})
export class EntityModule {
}
