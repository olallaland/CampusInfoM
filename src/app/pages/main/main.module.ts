import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { HotComponent } from './hot-activity/hot.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { UnreleasedActivityComponent } from './unreleased-activity/unreleased-activity.component';
import { OngoingActivityComponent } from './ongoing-activity/ongoing-activity.component';
import { ClosedActivityComponent } from './closed-activity/closed-activity.component';
import { SigningUpActivityComponent } from './signing-up-activity/signing-up-activity.component';
import {FormBuilder, FormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { SearchBoxComponent } from './search/search-box/search-box.component';
import { ResultComponent } from './search/result/result.component';

@NgModule({
  declarations: [
    MainComponent,
    HotComponent,
    MyActivityComponent,
    UnreleasedActivityComponent,
    OngoingActivityComponent,
    ClosedActivityComponent,
    SigningUpActivityComponent,
    DetailComponent,
    SearchComponent,
    SearchBoxComponent,
    ResultComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    MainRoutingModule,
    FormsModule
  ],
  providers: [
    FormBuilder, ResultComponent
  ]
})
export class MainModule { }
