import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {
    path: 'kanban',
    loadChildren: () =>
      import('./kanban/kanban.module').then(m => m.KanbanModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then(m => m.CustomersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
