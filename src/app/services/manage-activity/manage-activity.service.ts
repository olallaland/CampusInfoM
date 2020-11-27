import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ManageActivityService {

  private readonly serviceUrl = 'http://4200';
  constructor(public http: HttpClient,
              private router: Router,
              @Inject('BASE_CONFIG') serviceUrl
  ) {
    this.serviceUrl = serviceUrl;
  }

  getHostActivityList(): any {
    return this.http.get(this.serviceUrl + '/hostActivityList');
  }

  deleteActivity(activityId) {
    return this.http.get(this.serviceUrl + '/deleteActivity?activityId=' + activityId);
  }

  releaseActivity(activityId) {
    return this.http.get(this.serviceUrl + '/launchActivity?activityId=' + activityId);
  }

  searchActivity(content) {
    return this.http.post(this.serviceUrl + '/launchActivity',  content);
  }
}
