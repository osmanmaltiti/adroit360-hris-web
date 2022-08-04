import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGoal } from 'src/app/store/features/performance/types';

@Injectable({ providedIn: 'root' })
export class CreatePerformanceService {
  constructor(private http: HttpClient) {}

  onCreateObjective(objectiveData: IGoal) {
    return this.http.post<{ status: string; data: any }>(
      'http://localhost:5000/api/v1/goal/create_performance_goal',
      { performanceGoal: objectiveData },
      {
        headers: new HttpHeaders({ uid: String(localStorage.getItem('uid')) }),
      }
    );
  }
}
