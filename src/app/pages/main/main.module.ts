import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { HotComponent } from './hot-activity/hot.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import {FormBuilder, FormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { SearchBoxComponent } from './search/search-box/search-box.component';
import { ResultComponent } from './search/result/result.component';
import { ActivityListComponent } from './activity-list/activity-list.component';

@NgModule({
  declarations: [
    MainComponent,
    HotComponent,
    MyActivityComponent,
    DetailComponent,
    SearchComponent,
    SearchBoxComponent,
    ResultComponent,
    ActivityListComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    MainRoutingModule,
    FormsModule,
  ],
  providers: [
    FormBuilder, ResultComponent
  ]
})
export class MainModule { }
