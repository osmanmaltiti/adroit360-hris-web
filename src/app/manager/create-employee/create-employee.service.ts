import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CreateEmployeeService {
  constructor(private http: HttpClient) {}

  onCreateUser(signupData: {
    email: string;
    password: string;
    fullname: string;
    role: string;
  }) {
    return this.http.post<{
      status: string;
    }>(
      'http://localhost:5000/api/v1/user/signup',
      { ...signupData },
      {
        headers: new HttpHeaders({ uid: String(localStorage.getItem('uid')) }),
      }
    );
  }
}
