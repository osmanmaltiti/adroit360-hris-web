import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ManagerLoginService {
  constructor(private http: HttpClient) {}

  onLogin(loginData: { email: string; password: string }) {
    return this.http.post<{
      status: string;
      data: { uid: string; token: string };
    }>('http://localhost:5000/api/v1/manager/login', { ...loginData });
  }
}
