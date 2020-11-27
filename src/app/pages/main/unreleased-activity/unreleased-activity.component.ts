import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NzDrawerRef, NzDrawerService, NzMessageService, NzModalService} from 'ng-zorro-antd';
import {ManageActivityService} from '../../../services/manage-activity/manage-activity.service';
import {RResponse} from '../../../entities/RResponse';
import { imagePreview } from '../../../../utils/imagePreview';

interface ActivityItem {
  activityName: string;
  activityId: number;
  introduction: string;
  type: string;
  picture: string;
}

@Component({
  selector: 'app-unreleased-activity',
  templateUrl: './unreleased-activity.component.html',
  styleUrls: ['./unreleased-activity.component.scss']
})
export class UnreleasedActivityComponent implements OnInit {

  @ViewChild('drawerTemplate', { static: false }) drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;

  unreleasedActivityList: ActivityItem[] = [
    {
      activityName: '心理学讲座',
      activityId: 20125,
      type: '讲座',
      introduction: '1. 新的革命方法： 群众路线； \n' +
        '\n 2. 新的革命路线： 农村包围 城市； \n' +
        '\n 3. 新的指导思想： 马克思主义思想； \n' +
        '\n 4. 新的领导阶级： 共产党。',
      picture: '../../assets/intro/1.png'
    },
    {
      activityName: '星空论坛',
      activityId: 12502,
      type: '讲座',
      introduction: '1. 新的革命方法： 群众路线；\n 2. 新的革命路线： 农村包围城市； \n 3. 新的指导思想： 马克思主义思想； \n 4. 新的领导阶级： 共产党。',
      picture: '../../assets/intro/2.png'
    }
  ];

  listOfDisplayData = [...this.unreleasedActivityList];

  searchValue = '';

  value = 'test';
  picture = '../../assets/intro/2.png';
  date = [
    '2020-11-01 20:30',
    '2020-11-02 20:30'
  ];
  limit = 20;

  currentPageIndex = 1;
  total = 1;
  pageSize = 1;

  constructor(
    private nzMessageService: NzMessageService,
    private manageActivityService: ManageActivityService,
    private modal: NzModalService,
    private drawerService: NzDrawerService,
  ) { }

  ngOnInit(): void {
    this.total = this.listOfDisplayData.length;
  }

  /**
   * 清空搜索框，同时取消搜索的限制条件
   */
  reset(): void {
    this.searchValue = '';
    this.search();
  }

  /**
   * 处理搜索结果
   */
  search(): void {
    this.listOfDisplayData = this.unreleasedActivityList.filter((item: ActivityItem) =>
      item.activityName.indexOf(this.searchValue) !== -1);
    this.total = this.listOfDisplayData.length;
  }

  /**
   * 发布活动确认框
   * @param activityId 活动ID
   */
  showConfirm(activityId): void {
    this.modal.confirm({
      nzTitle: '确认要发布这个活动吗？',
      nzContent: '<b> 注：活动发布后不可编辑。 </b>',
      nzOnOk: () => this.releaseActivity(activityId),
      nzOnCancel: () => this.cancel()
    });
  }

  /**
   * 删除活动确认框
   * @param activityId 活动ID
   */
  showDeleteConfirm(activityId): void {
    this.modal.confirm({
      nzTitle: '确认要删除这个活动吗？',
      nzContent: '<b style="color: red;"> 注：删除操作不能撤销。</b>',
      nzOkText: '删除',
      nzOkType: 'danger',
      nzOnOk: () => this.deleteActivity(activityId),
      nzCancelText: '取消',
      nzOnCancel: () => this.cancel()
    });
  }

  /**
   * 删除活动
   * @param activityId 活动ID
   */
  deleteActivity(activityId) {
    this.manageActivityService.deleteActivity(activityId).subscribe((res: RResponse) => {
      if (res.code === 200) {
        this.confirm();
      } else {
        this.fail(res.data.message);
      }
    }, (err) => {
      this.fail(err.statusText);
    });
  }

  /**
   * 发布活动
   * @param activityId 活动ID
   */
  releaseActivity(activityId) {
    this.manageActivityService.deleteActivity(activityId).subscribe((res: RResponse) => {
      if (res.code === 200) {
        this.confirm();
      } else {
        this.fail(res.data.message);
      }
    }, (err) => {
      this.fail(err.statusText);
    });
  }

  /**
   * 编辑活动
   */
  openEditor() {
    const drawerRef = this.drawerService.create({
      nzTitle: '编辑活动',
      nzContent: this.drawerTemplate,
      nzBodyStyle: {overflow: 'auto'},
      nzWidth: 500,
      // nzContentParams: {
      //   value: this.value
      // }
    });

    drawerRef.afterOpen.subscribe(() => {
      console.log('Drawer(Template) open');
    });

    drawerRef.afterClose.subscribe(() => {
      console.log('Drawer(Template) close');
    });
  }

  /**
   * 取消操作
   */
  cancel(): void {
    this.nzMessageService.info('操作取消');
  }

  /**
   * 确认操作
   */
  confirm(): void {
    this.nzMessageService.info('操作成功');
  }

  /**
   * 操作失败
   */
  fail(content) {
    this.nzMessageService.info(content);
  }

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
