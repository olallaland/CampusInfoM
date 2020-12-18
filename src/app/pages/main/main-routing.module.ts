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
      // {
      //   path: 'hot',
      //   component: HotComponent,
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'search',
      //   component: SearchComponent,
      //   pathMatch: 'full'
      // },
      {
        path: 'myActivity',
        component: MyActivityComponent,
        pathMatch: 'full'
      },
      {
        path: '0',
        component: ActivityListComponent,
        pathMatch: 'full'
      },
      {
        path: '1',
        component: ActivityListComponent,
        pathMatch: 'full'
      },
      {
        path: '2',
        component: ActivityListComponent,
        pathMatch: 'full'
      },
      {
        path: '3',
        component: ActivityListComponent,
        pathMatch: 'full'
      },
      {
        path: '4',
        component: ActivityListComponent,
        pathMatch: 'full'
      },
      {
        path: '5',
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
