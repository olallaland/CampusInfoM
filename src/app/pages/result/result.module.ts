import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [ResultComponent, SuccessComponent, FailComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule
  ]
})
export class ResultModule { }
