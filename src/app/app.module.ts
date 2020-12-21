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
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

// modules
import { SetupModule } from './pages/setup/setup.module';
import { MainModule } from './pages/main/main.module';
import { NewActivityModule } from './pages/new-activity/new-activity.module';

// components

// services
import {LocalStorageService} from './services/local-storage/local-storage.service';
import {ManageActivityService} from './services/manage-activity/manage-activity.service';
import {SessionStorageService} from './services/session-storage/session-storage.service';
import {UserService} from './services/user/user.service';
import {DateTools} from '../utils/dateTools';


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
      useValue: '/api'
    },
    {
      provide: 'IMG_URL',
      useValue: 'http://175.24.120.91/images/'
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    FormBuilder, SessionStorageService, UserService, DateTools
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
