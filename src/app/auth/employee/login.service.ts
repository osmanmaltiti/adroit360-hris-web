import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmployeeLoginService {
  constructor(private http: HttpClient) {}

  onLogin(loginData: { email: string; password: string }) {
    return this.http.post<{
      status: string;
      data: { uid: string; token: string };
    }>('https://adroit-hris-api.herokuapp.com/api/v1/user/login', {
      ...loginData,
    });
  }
}
