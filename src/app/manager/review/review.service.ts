import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReview } from 'src/app/store/features/reviews/types';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  constructor(private http: HttpClient) {}

  onAppraiseReview(data: IReview) {
    return this.http.post<{ status: string; data: Array<any> }>(
      'http://localhost:5000/api/v1/manager/appraise_review',
      { data },
      {
        headers: new HttpHeaders({ uid: String(localStorage.getItem('uid')) }),
      }
    );
  }
}
