import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ManagerService {
  constructor(private http: HttpClient) {}

  onGetPendingReviews() {
    return this.http.get<{ status: string; data: Array<any> }>(
      'http://localhost:5000/api/v1/manager/get_reviews',
      {
        headers: new HttpHeaders({ uid: String(localStorage.getItem('uid')) }),
      }
    );
  }
}
