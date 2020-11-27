import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss']
})
export class NewActivityComponent implements OnInit {

  activityInfoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.activityInfoForm = this.formBuilder.group({
      activityName: [null, [Validators.required]],
      host: [null, [Validators.required]],
      type: [null, [Validators.required]],
      introduction: [null, [Validators.required]],
      picture: [null, [Validators.required]],
      venue: [null, [Validators.required]],
      limit: [null, [Validators.required]],
      activityTime: [[Date.now(), Date.now()], [Validators.required]],
      signUpTime: [[Date.now(), Date.now()], [Validators.required]]
    });
  }

  onBack(): void {
    history.back();
  }

  create() {
    // tslint:disable-next-line:forin
    for (const i in this.activityInfoForm.controls) {
      this.activityInfoForm.controls[i].markAsDirty();
      this.activityInfoForm.controls[i].updateValueAndValidity();
    }

    if (this.activityInfoForm.valid) {
      console.log(this.activityInfoForm.value);
    }
  }

}
