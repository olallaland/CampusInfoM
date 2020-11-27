import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import {HotComponent} from './hot-activity/hot.component';
import {MyActivityComponent} from './my-activity/my-activity.component';
import {UnreleasedActivityComponent} from './unreleased-activity/unreleased-activity.component';
import {OngoingActivityComponent} from './ongoing-activity/ongoing-activity.component';
import {SigningUpActivityComponent} from './signing-up-activity/signing-up-activity.component';
import {ClosedActivityComponent} from './closed-activity/closed-activity.component';
import {DetailComponent} from './detail/detail.component';
import {SearchComponent} from './search/search.component';


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
        component: UnreleasedActivityComponent,
        pathMatch: 'full'
      },
      {
        path: 'ongoing',
        component: OngoingActivityComponent,
        pathMatch: 'full'
      },
      {
        path: 'signingUp',
        component: SigningUpActivityComponent,
        pathMatch: 'full'
      },
      {
        path: 'closed',
        component: ClosedActivityComponent,
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
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
