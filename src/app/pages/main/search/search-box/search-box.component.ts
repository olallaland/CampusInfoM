import { Component, OnInit } from '@angular/core';
import {ResultComponent } from '../result/result.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  content = '';
  type = '0';
  searchForm!: FormGroup;
  constructor(
    private res: ResultComponent,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      content: [null, [Validators.required]],
      type: ['0', [Validators.required]],
    });
  }

  searchActivity() {
    // tslint:disable-next-line:forin
    for (const i in this.searchForm.controls) {
      this.searchForm.controls[i].markAsDirty();
      this.searchForm.controls[i].updateValueAndValidity();
    }

    if (this.searchForm.valid) {
      // tslint:disable-next-line:no-construct
      this.res.getResultList(this.searchForm.value.content, this.searchForm.value.type);
    }
  }
}
