import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from 'src/app/layout/layout.module'
import { OverviewComponent } from 'src/app/overview/overview.component'

const routes = [
  { path: '', component: OverviewComponent }
];

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ]
})
export class OverviewModule { }
