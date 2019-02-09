import { NgModule } from '@angular/core';
import { EntityListComponent } from './list/entity-list.component';
import { EntityListEditorComponent } from './editor/entity-list-editor.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    EntityListComponent,
    EntityListEditorComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    EntityListComponent,
    EntityListEditorComponent
  ]
})
export class EntityModule {}
