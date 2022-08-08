import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CreateManagerService {
  constructor(private http: HttpClient) {}

  onCreateUser(signupData: {
    email: string;
    password: string;
    fullname: string;
    role: string;
  }) {
    return this.http.post<{
      status: string;
      data: { uid: string; token: string };
    }>('https://adroit-hris-api.herokuapp.com/api/v1/manager/signup', {
      ...signupData,
    });
  }
}
