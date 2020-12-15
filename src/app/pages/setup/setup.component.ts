import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../services/local-storage/local-storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import {RResponse} from '../../entities/RResponse';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from "@angular/router";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  validateForm!: FormGroup;



  constructor(
    private store: LocalStorageService,
    private fb: FormBuilder,
    private userService: UserService,
    private message: NzMessageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
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

    this.userService.login(this.validateForm.value).subscribe((res: RResponse) => {
      if (res.message === 'success') {
        this.createMessage('success', '登录成功');
        console.log(res);
        this.store.set('role', res.role);
        this.store.set('name', res.displayName);
        this.store.set('userId', res.usrId);
        this.store.set('token', res.token);
        this.router.navigate(['/main']);
      } else {
        this.createMessage('error', res.message);
      }
      // if (res.code === 200) {
      //   console.log(res);
      //   this.createMessage('success', '登录成功');
      // } else {
      //   console.log(res);
      //   this.createMessage('error', res.message);
      // }
    }, (error) => {
      this.createMessage('error', 'unknown error');
    });
  }

  createMessage(type: string, content: string): void {
    this.message.create(type, content);
  }

}
