import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewActivityComponent } from './new-activity.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [NewActivityComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ]
})
export class NewActivityModule { }
