import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/local-storage/local-storage.service';
import {Router} from '@angular/router';
import {NzMessageService} from 'ng-zorro-antd';
import {SessionStorageService} from '../../services/session-storage/session-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isCollapsed = false;
  constructor(
    public sessionStorage: SessionStorageService,
    private router: Router,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    if (this.sessionStorage.get('userId') === null) {
      this.createMessage('warning', '请先登录');
      this.router.navigate(['/setup']);
    }
  }

  logout() {
    this.sessionStorage.clear();
    this.router.navigate(['/setup']);
  }

  createMessage(type: string, content: string): void {
    this.message.create(type, content);
  }
}
