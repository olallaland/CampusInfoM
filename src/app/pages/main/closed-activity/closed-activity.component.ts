import { Component, OnInit } from '@angular/core';

interface ActivityItem {
  activityName: string;
  activityId: number;
  introduction: string;
  type: string;
  picture: string;
}

@Component({
  selector: 'app-closed-activity',
  templateUrl: './closed-activity.component.html',
  styleUrls: ['./closed-activity.component.scss']
})
export class ClosedActivityComponent implements OnInit {

  closedActivityList: ActivityItem[] = [
    {
      activityName: '心理学讲座',
      activityId: 20125,
      type: '讲座',
      introduction: '1. 新的革命方法： 群众路线； \n' +
        '\n 2. 新的革命路线： 农村包围 城市； \n' +
        '\n 3. 新的指导思想： 马克思主义思想； \n' +
        '\n 4. 新的领导阶级： 共产党。',
      picture: '../../assets/intro/10.png'
    },
    {
      activityName: '星空论坛',
      activityId: 12502,
      type: '讲座',
      introduction: '1. 新的革命方法： 群众路线；\n 2. 新的革命路线： 农村包围城市； \n 3. 新的指导思想： 马克思主义思想； \n 4. 新的领导阶级： 共产党。',
      picture: '../../assets/intro/9.png'
    }
  ];

  listOfDisplayData = [...this.closedActivityList];

  searchValue = '';

  currentPageIndex = 1;
  total = 1;
  pageSize = 1;

  constructor() { }

  ngOnInit(): void {
    this.total = this.listOfDisplayData.length;
  }

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.listOfDisplayData = this.closedActivityList.filter((item: ActivityItem) =>
      item.activityName.indexOf(this.searchValue) !== -1);
    this.total = this.listOfDisplayData.length;
  }
}
