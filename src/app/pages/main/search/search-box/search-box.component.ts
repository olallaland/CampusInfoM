import { Component, OnInit } from '@angular/core';
import {ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  content = '';
  constructor(private res: ResultComponent) { }

  ngOnInit(): void {
  }

  searchActivity() {
    const content = {
      content: this.content
    };
    this.res.getResultList(content);
  }
}
