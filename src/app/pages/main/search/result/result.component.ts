import { Component, OnInit } from '@angular/core';
import {ManageActivityService} from '../../../../services/manage-activity/manage-activity.service';
import {RResponse} from '../../../../entities/RResponse';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  resultList = [];

  constructor(
    private manageActivityService: ManageActivityService,
  ) { }

  ngOnInit(): void {
  }

  getResultList(content) {
    this.resultList = [
      {
        activityName: 'Come and join us',
        activityId: 12012,
        introduction: 'こんにちは。おはよう。ありがとうございます。',
        type: 'すごい',
        picture: '../../../assets/intro/5.png'
      },
      {
        activityName: 'Come and join us',
        activityId: 12012,
        introduction: 'こんにちは。おはよう。ありがとうございます。',
        type: 'すごい',
        picture: '../../../assets/intro/2.png'
      },
      {
        activityName: 'Come and join us',
        activityId: 12012,
        introduction: 'こんにちは。おはよう。ありがとうございます。',
        type: 'すごい',
        picture: '../../../assets/intro/9.png'
      },
      {
        activityName: 'Come and join us',
        activityId: 12012,
        introduction: 'こんにちは。おはよう。ありがとうございます。',
        type: 'すごい',
        picture: '../../../assets/intro/7.png'
      },
      {
        activityName: 'Come and join us',
        activityId: 12012,
        introduction: 'こんにちは。おはよう。ありがとうございます。',
        type: 'すごい',
        picture: '../../../assets/intro/4.png'
      },
      {
        activityName: 'Come and join us',
        activityId: 12012,
        introduction: 'こんにちは。おはよう。ありがとうございます。',
        type: 'すごい',
        picture: '../../../assets/intro/1.png'
      },
      {
        activityName: 'Come and join us',
        activityId: 12012,
        introduction: 'こんにちは。おはよう。ありがとうございます。',
        type: 'すごい',
        picture: '../../../assets/intro/10.png'
      }
    ];

    this.manageActivityService.searchActivity(content).subscribe((res: RResponse) => {
      if (res.code === 200) {
        this.resultList = res.data.activityList;
      }
    }, (error) => {
      // TODO
    });
  }

}
