import { Component, OnInit } from '@angular/core';
import {ManageActivityService} from '../../../services/manage-activity/manage-activity.service';
import {ActivityItem} from '../../../entities/ActivityItem';
import {Router} from '@angular/router';
import {DateTools} from '../../../../utils/dateTools';

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.scss']
})
export class MyActivityComponent implements OnInit {

  hostActivityList: ActivityItem[] = [
    // {
    //   activityName: '心理学讲座之我的人生为什么这么',
    //   activityId: 20125,
    //   type: '讲座',
    //   status: '已结束',
    //   venue: '邯郸校区 3102',
    //   startTime: '2020-11-12 16:30',
    //   endTime: '2020-11-12 17:30',
    //   limit: 100,
    //   enrollment: 80
    // },
    // {
    //   activityName: '星空论坛',
    //   activityId: 12502,
    //   type: '讲座',
    //   status: '已结束',
    //   venue: '邯郸校区 GX302',
    //   startTime: '2020-11-12 15:30',
    //   endTime: '2020-11-12 16:30',
    //   limit: 120,
    //   enrollment: 99
    // },
    // {
    //   activityName: '面向对象编程',
    //   activityId: 12503,
    //   type: '讲座',
    //   status: '进行中',
    //   venue: '邯郸校区 GX302',
    //   startTime: '2020-11-27 15:30',
    //   endTime: '2020-11-27 16:30',
    //   limit: 120,
    //   enrollment: 99
    // },
    // {
    //   activityName: 'Unity基础',
    //   activityId: 12502,
    //   type: '讲座',
    //   status: '报名中',
    //   venue: '邯郸校区 GX302',
    //   startTime: '2020-11-28 15:30',
    //   endTime: '2020-11-28 16:30',
    //   limit: 120,
    //   enrollment: 99
    // },
    {
      activityName: '东西方艺术',
      activityId: 12502,
      type: '讲座',
      status: '未发布',
      venue: '邯郸校区 GX302',
      introduction: 'this is intro',
      picture: 'ser',
      activityStartTime: 1605756906000,
      activityEndTime: 1605756906001,
      signUpStartTime: 1605756906000,
      signUpEndTime: 1605756906000,
      createTime: 1605756905000,
      launchTime: 1605756906000,
      limit: 120,
      enrollment: 99
    }
  ];
  listOfDisplayData;

  visible = false;
  searchValue = '';

  tabs = [
    {
      name: '表格',
      icon: 'table'
    },
    {
      name: '日历',
      icon: 'calendar'
    }
  ];

  // 当前页数
  currentPageIndex = 1;
  pageSize = 5;
  total = 1;

  constructor(
    private manageActivityService: ManageActivityService,
    private router: Router,
    public dateTools: DateTools
  ) { }

  ngOnInit(): void {
    this.manageActivityService.getHostActivityList().subscribe((res: any) => {
      console.log(res);
      this.hostActivityList = res.activities;
      this.listOfDisplayData = [...this.hostActivityList];
      this.total = this.hostActivityList.length;
    }, (error) => {
      // TODO createMessage 整合到一个类中
    });
  }

  sortIdFn(a, b) {
    return a.activityId - b.activityId;
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.hostActivityList.filter((item: ActivityItem) => item.activityName.indexOf(this.searchValue) !== -1);
  }

  /**
   * 根据活动状态ID获取活动状态
   * @parameter statusId
   */
  getStringStatus(statusId): string {
    switch (statusId) {
      case 0:
        return '未发布';
      case 1:
        return '未开始报名';
      case 2:
        return '报名中';
      case 3:
        return '报名结束';
      case 4:
        return '进行中';
      case 5:
        return '已结束';
    }
  }

  show(activityId) {
    this.router.navigate(['/main/detail/' + activityId]);
  }

}
