import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {LocalStorageService} from '../local-storage/local-storage.service';
import {SessionStorageService} from '../session-storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ManageActivityService {
  httpOptionsGet = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.sessionStorage.get('token')
    })
  };

  httpOptionsPost = {
    headers: new HttpHeaders({
      Authorization: this.sessionStorage.get('token')
    })
  };

  private readonly serviceUrl;
  constructor(public http: HttpClient,
              private router: Router,
              @Inject('BASE_CONFIG') serviceUrl,
              private sessionStorage: SessionStorageService
  ) {
    this.serviceUrl = serviceUrl;
  }

  /**
   * 获取活动地点列表
   */
  getVenueList() {
    return this.http.get(this.serviceUrl + '/getVenueList', this.httpOptionsGet);
  }

  /**
   * 创建活动
   * @parameter activityInfo
   */
  createActivity(activityInfo) {
    return this.http.post(this.serviceUrl + '/createActivity', activityInfo, this.httpOptionsPost);
  }

  /**
   * 获得主办方活动列表
   */
  getHostActivityList(): any {
    return this.http.get(this.serviceUrl + '/hostActivityList', this.httpOptionsGet);
  }

  /**
   * 根据活动 ID 获取活动详情
   * @parameter activityId
   */
  getHostActivityById(activityId) {
    return this.http.get(this.serviceUrl + '/hostActivityDetails?activityId=' + activityId, this.httpOptionsGet);
  }

  /**
   * 根绝活动 ID 删除活动
   * @parameter activityId
   */
  deleteActivity(activityId) {
    return this.http.get(this.serviceUrl + '/deleteActivity?activityId=' + activityId, this.httpOptionsGet);
  }

  /**
   * 发布活动
   * @parameter activityId
   */
  releaseActivity(activityId) {
    return this.http.get(this.serviceUrl + '/launchActivity?activityId=' + activityId, this.httpOptionsGet);
  }

  /**
   * 编辑活动
   * @parameter activityInfo
   */
  editActivity(activityInfo) {
    return this.http.post(this.serviceUrl + '/editActivity', activityInfo, this.httpOptionsPost);
  }

  /**
   * 编辑活动 （不改图片简介）
   * @parameter activityInfo
   */
  editActivityNoPic(activityInfo) {
    return this.http.post(this.serviceUrl + '/editActivityNoPic', activityInfo, this.httpOptionsGet);
  }

  /**
   * 根据活动名称或者活动地点搜索活动
   * @parameter content
   * @parameter type
   */
  searchActivity(content: string, type: number) {
    // @ts-ignore
    return this.http.get(this.serviceUrl + '/searchActivity?content=' + content.toString('Utf-8') + '&type=' + type, this.httpOptionsGet);
  }

  /**
   * 根据活动状态搜索活动
   * @parameter status
   */
  searchActivityByStatus(status) {
    return this.http.get(this.serviceUrl + '/searchByStatus?status=' + status, this.httpOptionsGet);
  }
}
