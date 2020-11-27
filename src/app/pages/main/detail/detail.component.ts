import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

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
        {username: 'Sam', userId: 17258450001}
      ],
      uncheckedList: [
        {username: 'Jimmy', userId: 17248450051}
      ],
      participateRate: 0.95,
      averageScore: 5,
      comments: [
        {userId: 17305020230, username: 'Kim', content: 'Good!'}
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onBack(): void {
    history.back();
  }

}
