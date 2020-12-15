import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {LocalStorageService} from '../local-storage/local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class ManageActivityService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.store.get('token')
    })
  };

  private readonly serviceUrl;
  constructor(public http: HttpClient,
              private router: Router,
              @Inject('BASE_CONFIG') serviceUrl,
              private store: LocalStorageService
  ) {
    this.serviceUrl = serviceUrl;
  }

  getVenueList() {
    return this.http.get(this.serviceUrl + '/getVenueList', this.httpOptions);
  }

  createActivity(activityInfo) {
    return this.http.post(this.serviceUrl + '/createActivity', activityInfo, this.httpOptions);
  }

  getHostActivityList(): any {
    return this.http.get(this.serviceUrl + '/hostActivityList');
  }

  getHostActivityById(activityId) {
    return this.http.get(this.serviceUrl + '/hostActivityDetail?activityId=' + activityId);
  }

  deleteActivity(activityId) {
    return this.http.get(this.serviceUrl + '/deleteActivity?activityId=' + activityId);
  }

  releaseActivity(activityId) {
    return this.http.get(this.serviceUrl + '/launchActivity?activityId=' + activityId);
  }

  editActivity(activityInfo) {
    return this.http.post(this.serviceUrl + '/editActivity', activityInfo, this.httpOptions);
  }

  searchActivity(content, type) {
    return this.http.get(this.serviceUrl + '/searchActivity?content=' + content + '&type=' + type);
  }

  searchActivityByStatus(status) {
    return this.http.get(this.serviceUrl + '/searchByStatus?status=' + status);
  }
}
