import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskbarService {
  constructor(private http: HttpClient) {}

  onComplete(data: any) {
    return this.http.post<{ status: string; data: string }>(
      'http://localhost:5000/api/v1/goal/complete_goal',
      { data: { id: data._id, type: data.type } },
      {
        headers: new HttpHeaders({ uid: String(localStorage.getItem('uid')) }),
      }
    );
  }

  onReviewSubmit(data: any) {
    return this.http.post<{ status: string; data: string }>(
      'http://localhost:5000/api/v1/goal/submit_review',
      { data },
      {
        headers: new HttpHeaders({ uid: String(localStorage.getItem('uid')) }),
      }
    );
  }
}
