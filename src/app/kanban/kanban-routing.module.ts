import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsListComponent } from './board-list/board-list.component';

const routes: Routes = [
  { path: '', component: BoardsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KanbanRoutingModule { }
