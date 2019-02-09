import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EditEntitiesListComponent} from '@entity/components/edit-entities-list/edit-entities-list.component';
import {MainComponent} from '@entity/components/main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'entities/:listId',
    component: EditEntitiesListComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
