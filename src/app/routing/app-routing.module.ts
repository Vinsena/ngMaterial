import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityListComponent } from '../entity/list/entity-list.component';
import { EntityListEditorComponent } from '../entity/editor/entity-list-editor.component';

const routes: Routes = [
  {
    path: '',
    component: EntityListComponent
  },
  {
    path: 'entity/:listId',
    component: EntityListEditorComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
