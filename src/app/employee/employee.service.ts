import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  constructor(private http: HttpClient) {}

  onGetGoals() {
    return this.http.get<{ status: string; data: Array<any> }>(
      'http://localhost:5000/api/v1/goal/get_goals',
      {
        headers: new HttpHeaders({ uid: String(localStorage.getItem('uid')) }),
      }
    );
  }

  onGetProfile() {
    return this.http.get<{ status: string; data: any }>(
      'http://localhost:5000/api/v1/user/get_profile',
      {
        headers: new HttpHeaders({ uid: String(localStorage.getItem('uid')) }),
      }
    );
  }

  onGetFeedback() {
    return this.http.get<{ status: string; data: any }>(
      'http://localhost:5000/api/v1/goal/get_feedback',
      {
        headers: new HttpHeaders({ uid: String(localStorage.getItem('uid')) }),
      }
    );
  }
}
