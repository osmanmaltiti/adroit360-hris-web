import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskbarService {
  constructor(private http: HttpClient) {}

  onComplete(data: any) {
    return this.http.post<{ status: string; data: string }>(
      'https://adroit-hris-api.herokuapp.com/api/v1/goal/complete_goal',
      { data: { id: data._id, type: data.type } },
      {
        headers: new HttpHeaders({
          uid: String(localStorage.getItem('uid')),
          authorization: 'Bearer' + ' ' + String(localStorage.getItem('token')),
        }),
      }
    );
  }

  onReviewSubmit(data: any) {
    return this.http.post<{ status: string; data: string }>(
      'https://adroit-hris-api.herokuapp.com/api/v1/goal/submit_review',
      { data },
      {
        headers: new HttpHeaders({
          uid: String(localStorage.getItem('uid')),
          authorization: 'Bearer' + ' ' + String(localStorage.getItem('token')),
        }),
      }
    );
  }
}
