import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {FormBuilder, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';

// modules
import { SetupModule } from './pages/setup/setup.module';
import { MainModule } from './pages/main/main.module';
import { NewActivityModule } from './pages/new-activity/new-activity.module';

// components

// services
import {LocalStorageService} from './services/local-storage/local-storage.service';
import {ManageActivityService} from './services/manage-activity/manage-activity.service';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    NzButtonModule,
    SetupModule,
    MainModule,
    NewActivityModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, LocalStorageService, ManageActivityService,
    {
      provide: 'BASE_CONFIG',
      // 3.94.89.139 localhost 3.219.247.83 18.212.109.155
      useValue: 'http://18.212.109.155:8089'
    },
    FormBuilder,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
