import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import {DisabledTimeFn, NzDatePickerComponent, NzMessageService} from 'ng-zorro-antd';
import {ManageActivityService} from '../../services/manage-activity/manage-activity.service';
import {RResponse} from '../../entities/RResponse';
import {LocalStorageService} from '../../services/local-storage/local-storage.service';
import {Router} from '@angular/router';
import {SessionStorageService} from '../../services/session-storage/session-storage.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss']
})
export class NewActivityComponent implements OnInit {

  today = new Date();
  activityInfoForm!: FormGroup;
  picture;
  activityDate: Date[] = [];
  signUpDate: Date[] = [];
  venueList = [
    {venueId: 3, venueName: 'HGX101', campus: '邯郸校区'},
    {venueId: 5, venueName: 'HGX104', campus: '邯郸校区'},
  ];

  // 限制活动开始的时间晚于当前时间
  activityStartDateLimit = (activityStartDate: Date): boolean => {
    if (!activityStartDate || !this.activityDate) {
      return differenceInCalendarDays(activityStartDate, this.today) <= 0;
    }

    return activityStartDate.getTime() < this.today.getTime();
  }

  // 限制活动报名的时间早于活动开始时间，晚于当前时间
  signUpStartDateLimit = (signUpStartDate: Date) => {
    if (!signUpStartDate || !this.signUpDate) {
      return differenceInCalendarDays(signUpStartDate, this.activityDate[0]) >= 0 ||
        differenceInCalendarDays(signUpStartDate, this.today) <= 0;
    }
    return signUpStartDate.getTime() > this.activityDate[0].getTime() ||
      differenceInCalendarDays(signUpStartDate, this.today) <= 0;
  }

  constructor(
    private formBuilder: FormBuilder,
    private manageActivityService: ManageActivityService,
    private message: NzMessageService,
    private router: Router,
    private sessionStorage: SessionStorageService
  ) {
  }

  ngOnInit(): void {
    if (this.sessionStorage.get('userId') === null) {
      this.createMessage('warning', '请先登录');
      this.router.navigate(['/setup']);
    }

    this.activityInfoForm = this.formBuilder.group({
      activityName: [null, [Validators.required]],
      host: [null, [Validators.required]],
      type: [null, [Validators.required]],
      introduction: [null, [Validators.required]],
      picture: [null, [Validators.required]],
      venueId: [null, [Validators.required]],
      limit: [null, [Validators.required]],
      activityTime: [[Date.now(), Date.now()], [Validators.required, Validators.required]],
      signUpTime: [[Date.now(), Date.now()], [Validators.required, Validators.required]],
      activityStartTime: [this.activityDate[0]],
      activityEndTime: [this.activityDate[1]],
      signUpStartTime: [this.signUpDate[0]],
      signUpEndTime: [this.signUpDate[1]],
    });

    // 获取所有的活动地点列表
    this.manageActivityService.getVenueList().subscribe((res: any) => {
      this.venueList = res.venueList;
      console.log(this.venueList);
    }, (error) => {
      console.log(error);
    });
  }

  onBack(): void {
    history.back();
  }

  create(){
    // tslint:disable-next-line:forin
    for (const i in this.activityInfoForm.controls) {
      this.activityInfoForm.controls[i].markAsDirty();
      this.activityInfoForm.controls[i].updateValueAndValidity();
    }

    this.activityInfoForm.value.activityStartTime = this.activityDate[0];
    this.activityInfoForm.value.activityEndTime = this.activityDate[1];
    this.activityInfoForm.value.signUpStartTime = this.signUpDate[0];
    this.activityInfoForm.value.signUpEndTime = this.signUpDate[1];
    // this.activityInfoForm.value.remove('picture');
    // this.activityInfoForm.value.picture = this.picture;

    const formData = new FormData();
    formData.append('picture', this.picture);
    const params = JSON.stringify(this.activityInfoForm.value);
    formData.append('params', new Blob([params], {type: 'application/json'}));
    console.log(formData);

    if (this.activityInfoForm.valid) {
      console.log(this.activityInfoForm.value);
      console.log(formData);

      this.manageActivityService.createActivity(formData).subscribe((res: RResponse) => {
        console.log(res);
        if (res.message === 'success') {
          this.createMessage('success', '创建成功');
          setTimeout('history.back()', 1000);
        } else {
          this.createMessage('error', res.message);
        }
      }, (error) => {
        this.createMessage('error', error);
      });
    }
  }

  createMessage(type: string, content): void {
    this.message.create(type, content);
  }

  /**
   * 本地预览图片
   * @parameter event
   */
  preview(event) {
    this.picture = event.srcElement.files[0]; // 获取图片这里只操作一张图片
    // this.imgSrc = window.URL.createObjectURL(this.picture); // 获取上传的图片临时路径

    let file;
    if (event.target.files[0]) {
      // tslint:disable-next-line:no-shadowed-variable
      file = event.target.files[0];
      console.log(file);
      console.log('file.size = ' + file.size);
      // obj.file = file;
    }
    // this.user.picture = file;

    // file.size 单位为byte
    const reader = new FileReader();
    // 读取文件过程方法
    // tslint:disable-next-line:only-arrow-functions
    reader.onloadstart = function(e) {
      console.log('开始读取....');
    };
    // tslint:disable-next-line:only-arrow-functions
    reader.onprogress = function(e) {
      console.log('正在读取中....');
    };
    // tslint:disable-next-line:only-arrow-functions
    reader.onabort = function(e) {
      console.log('中断读取....');
    };
    // tslint:disable-next-line:only-arrow-functions
    reader.onerror = function(e) {
      console.log('读取异常....');
    };
    // tslint:disable-next-line:only-arrow-functions
    reader.onload = function(e) {
      console.log('成功读取....');

      const img = document.getElementById('imgPreview');
      if (typeof e.target.result === 'string') {
        img.setAttribute('src', e.target.result);
      }
    };
    reader.readAsDataURL(file);
  }
}
