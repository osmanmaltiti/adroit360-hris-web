import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(private http: HttpClient) {}

  onGetGoals() {
    return this.http.get<{ status: string; data: Array<any> }>(
      'https://adroit-hris-api.herokuapp.com/api/v1/goal/get_goals',
      {
        headers: new HttpHeaders({
          uid: String(localStorage.getItem('uid')),
          authorization: 'Bearer' + ' ' + String(localStorage.getItem('token')),
        }),
      }
    );
  }

  onGetProfile() {
    return this.http.get<{ status: string; data: any }>(
      'https://adroit-hris-api.herokuapp.com/api/v1/user/get_profile',
      {
        headers: new HttpHeaders({
          uid: String(localStorage.getItem('uid')),
          authorization: 'Bearer' + ' ' + String(localStorage.getItem('token')),
        }),
      }
    );
  }

  onGetFeedback() {
    return this.http.get<{ status: string; data: any }>(
      'https://adroit-hris-api.herokuapp.com/api/v1/goal/get_feedback',
      {
        headers: new HttpHeaders({
          uid: String(localStorage.getItem('uid')),
          authorization: 'Bearer' + ' ' + String(localStorage.getItem('token')),
        }),
      }
    );
  }
}
