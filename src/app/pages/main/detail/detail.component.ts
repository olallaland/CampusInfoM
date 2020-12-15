import { Component, OnInit } from '@angular/core';
import {ManageActivityService} from '../../../services/manage-activity/manage-activity.service';
import {Router} from '@angular/router';
import {RResponse} from '../../../entities/RResponse';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  activityDetails;
  activityInfoList = [
    {
      activityName: '星空论坛',
      activityId: 12502,
      introduction: 'Your fingertips cross my skin. You said me Spanish in my eyes, the' +
        ' sweetest silence in your eyes. Imagines~ I never wanna see you unhappy, I thought ' +
        'you want the same for me.',
      type: '讲座',
      picture: '../../assets/intro/12.png',
      activityVenue: '邯郸校区 GX302',
      startTime: '2020-11-02 15:30',
      endTime: '2020-11-02 16:30',
      status: '已结束',
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
      uncheckedList: [
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
    }
  ];
  activityId;

  constructor(
    private manageActivityService: ManageActivityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activityId = this.router.url.split('/')[3];
    console.log(this.activityId);
    this.manageActivityService.getHostActivityById(this.activityId).subscribe((res: RResponse) => {
      if (res.code === 200) {
        this.activityDetails = res.data.activities[0];
      } else {
      }
    }, (error) => {
    });
    this.activityDetails = this.activityInfoList[0];
  }

  onBack(): void {
    history.back();
  }

  sortIdFn(a, b) {
    return a.userId - b.userId;
  }

}
