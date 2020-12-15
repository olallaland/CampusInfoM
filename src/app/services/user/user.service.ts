import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private readonly serviceUrl;

  constructor(public http: HttpClient,
              private router: Router,
              @Inject('BASE_CONFIG') serviceUrl
  ) {
    this.serviceUrl = '/api';
  }

  login(validateData) {
    return this.http.post(this.serviceUrl + '/login', validateData, httpOptions);
  }
}
