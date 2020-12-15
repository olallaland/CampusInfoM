import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import {HotComponent} from './hot-activity/hot.component';
import {MyActivityComponent} from './my-activity/my-activity.component';
import {DetailComponent} from './detail/detail.component';
import {SearchComponent} from './search/search.component';
import {ActivityListComponent} from './activity-list/activity-list.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'hot',
        component: HotComponent,
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: SearchComponent,
        pathMatch: 'full'
      },
      {
        path: 'myActivity',
        component: MyActivityComponent,
        pathMatch: 'full'
      },
      {
        path: 'unreleased',
        component: ActivityListComponent,
        pathMatch: 'full'
      },
      {
        path: 'ongoing',
        component: ActivityListComponent,
        pathMatch: 'full'
      },
      {
        path: 'signing',
        component: ActivityListComponent,
        pathMatch: 'full'
      },
      {
        path: 'closed',
        component: ActivityListComponent,
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
