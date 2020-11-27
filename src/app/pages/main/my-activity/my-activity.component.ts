import { Component, OnInit } from '@angular/core';
import {ManageActivityService} from '../../../services/manage-activity/manage-activity.service';
import {RResponse} from '../../../entities/RResponse';
import {Router} from '@angular/router';

interface ActivityItem {
  activityName: string;
  activityId: number;
  type: string;
  status: string;
  activityVenue: string;
  startTime: string;
  endTime: string;
  limit: number;
  enrollment: number;
}

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.scss']
})
export class MyActivityComponent implements OnInit {

  hostActivityList: ActivityItem[] = [
    {
      activityName: '心理学讲座之我的人生为什么这么',
      activityId: 20125,
      type: '讲座',
      status: '已结束',
      activityVenue: '邯郸校区 3102',
      startTime: '2020-11-12 16:30',
      endTime: '2020-11-12 17:30',
      limit: 100,
      enrollment: 80
    },
    {
      activityName: '星空论坛',
      activityId: 12502,
      type: '讲座',
      status: '已结束',
      activityVenue: '邯郸校区 GX302',
      startTime: '2020-11-12 15:30',
      endTime: '2020-11-12 16:30',
      limit: 120,
      enrollment: 99
    },
    {
      activityName: '面向对象编程',
      activityId: 12502,
      type: '讲座',
      status: '进行中',
      activityVenue: '邯郸校区 GX302',
      startTime: '2020-11-27 15:30',
      endTime: '2020-11-27 16:30',
      limit: 120,
      enrollment: 99
    },
    {
      activityName: 'Unity基础',
      activityId: 12502,
      type: '讲座',
      status: '报名中',
      activityVenue: '邯郸校区 GX302',
      startTime: '2020-11-28 15:30',
      endTime: '2020-11-28 16:30',
      limit: 120,
      enrollment: 99
    },
    {
      activityName: '东西方艺术',
      activityId: 12502,
      type: '讲座',
      status: '未发布',
      activityVenue: '邯郸校区 GX302',
      startTime: '2020-11-15 15:30',
      endTime: '2020-11-15 16:30',
      limit: 120,
      enrollment: 99
    }
  ];

  listOfDisplayData = [...this.hostActivityList];

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
  pageSize = 2;
  total = 1;

  constructor(
    private manageActivityService: ManageActivityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.manageActivityService.getHostActivityList().subscribe((res: RResponse) => {
    //   if (res.code === 200) {
    //     this.hostActivityList = res.data.activities;
    //   } else {
    //     // 没有活动，弹出提示？
    //   }
    // });
    this.total = this.hostActivityList.length;
  }

  sortIdFn(a, b) {
    return a.activityId < b.activityId;
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.hostActivityList.filter((item: ActivityItem) => item.activityName.indexOf(this.searchValue) !== -1);
  }

  isToday(date, activity) {
    let day = date.getDate();
    if (day < 10) {
      day = '0' + day;
    }
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    const curDate = date.getFullYear() + '-' + month + '-' + day;
    const activityDate = activity.startTime.split(' ')[0];
    return curDate === activityDate;
  }

  show(index) {
    this.router.navigate(['/main/detail/{{activity.activityId}}']);
  }

}
