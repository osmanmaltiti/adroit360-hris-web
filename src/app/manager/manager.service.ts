import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ManagerService {
  constructor(private http: HttpClient) {}

  onGetPendingReviews() {
    return this.http.get<{ status: string; data: Array<any> }>(
      'https://adroit-hris-api.herokuapp.com/api/v1/manager/get_reviews',
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
      'https://adroit-hris-api.herokuapp.com/api/v1/manager/get_profile',
      {
        headers: new HttpHeaders({
          uid: String(localStorage.getItem('uid')),
          authorization: 'Bearer' + ' ' + String(localStorage.getItem('token')),
        }),
      }
    );
  }
}
