import {Component, Inject, OnInit} from '@angular/core';
import {ManageActivityService} from '../../../services/manage-activity/manage-activity.service';
import {Router} from '@angular/router';
import {RResponse} from '../../../entities/RResponse';
import {DateTools} from '../../../../utils/dateTools';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  activityDetails = {
    activityName: '星空论坛',
    activityId: 12502,
    introduction: 'Your fingertips cross my skin. You said me Spanish in my eyes, the' +
      ' sweetest silence in your eyes. Imagines~ I never wanna see you unhappy, I thought ' +
      'you want the same for me.',
    type: '讲座',
    picture: '../../assets/intro/12.png',
    venue: '邯郸校区 GX302',
    venueID: '3',
    activityStartTime: 17258450001,
    activityEndTime: 17258450001,
    status: 0,
    limit: 120,
    enrollment: 99,
    checkIn: 95,
    checkedList: [
      {username: 'Sam', userId: 17258450001},
      {username: 'Sam', userId: 17258450002},
      {username: 'Sam', userId: 17258450005},
      {username: 'Sam', userId: 17258450008},
      {username: 'Sam', userId: 17258450003},
      {username: 'Sam', userId: 17258450012},
      {username: 'Sam', userId: 17258450120},
      {username: 'Sam', userId: 17258450000},
      {username: 'Sam', userId: 17258450055},
      {username: 'Sam', userId: 17258450009},
      {username: 'Sam', userId: 17258450012},
      {username: 'Sam', userId: 17258450011}
    ],
    unCheckedList: [
      {username: 'Jimmy', userId: 17248450051}
    ],
    participateRate: 0.95,
    averageScore: 5,
    comments: [
      {userId: 17305020230, username: 'Kim', content: 'We supply a series of design principles, ' +
          'practical patterns and high quality design resources (Sketch and Axure), ' +
          'to help people create their product prototypes beautifully and efficiently.\''},
      {userId: 17305020230, username: 'Kim', content: 'Good!'},
      {userId: 17305020230, username: 'Kim', content: 'Good!'},
      {userId: 17305020230, username: 'Kim', content: 'Good!'},
    ]
  };
  activityId;
  imgUrl;

  constructor(
    private manageActivityService: ManageActivityService,
    private router: Router,
    public dateTools: DateTools,
    @Inject('IMG_URL') imgURL,
  ) {
    this.imgUrl = imgURL;
  }

  ngOnInit(): void {
    this.activityId = this.router.url.split('/')[3];
    console.log(this.activityId);
    this.manageActivityService.getHostActivityById(this.activityId).subscribe((res: any) => {
      this.activityDetails = res;
    }, (error) => {
    });
  }

  onBack(): void {
    history.back();
  }

  sortIdFn(a, b) {
    return a.userId - b.userId;
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

}
