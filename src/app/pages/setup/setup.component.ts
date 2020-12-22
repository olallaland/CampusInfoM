import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/local-storage/local-storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import {RResponse} from '../../entities/RResponse';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {SessionStorageService} from '../../services/session-storage/session-storage.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  validateForm!: FormGroup;
  array = [0, 1, 2, 3];
  bgImgGroup = [
    './assets/img/faxuelou.jpg',
    './assets/img/grass.jpg',
    './assets/img/guanghualou.jpg',
    './assets/img/xianghuitang.jpg'
  ];

  constructor(
    private store: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private fb: FormBuilder,
    private userService: UserService,
    private message: NzMessageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.sessionStorage.get('token') != null) {
      this.router.navigate(['/main']);
    }
    console.log(window.location.href);
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.userService.login(this.validateForm.value).subscribe((res: any) => {
      if (res.message === 'success') {
        this.createMessage('success', '登录成功');
        console.log(res);
        this.sessionStorage.set('role', res.role);
        this.sessionStorage.set('name', res.displayName);
        this.sessionStorage.set('userId', res.usrId);
        this.sessionStorage.set('token', res.token);
        this.router.navigate(['/main']);
      } else {
        this.createMessage('error', res.message);
      }
    }, (error) => {
      this.createMessage('error', 'unknown error');
    });
  }

  createMessage(type: string, content: string): void {
    this.message.create(type, content);
  }

}
