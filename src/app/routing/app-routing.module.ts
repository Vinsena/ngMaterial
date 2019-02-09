import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from '@core/main/main.component';
import {EditEntitiesListComponent} from '@core/edit-entities-list/edit-entities-list.component';

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
