import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizationFilter } from './common/authorizationFilter.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthorizationFilter],
    pathMatch: 'full',
    loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
  },
  {
    path: 'Overview',
    canActivate: [AuthorizationFilter],
    pathMatch: 'full',
    loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
