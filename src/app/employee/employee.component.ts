import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { store } from '../store/store';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  developmentGoalsFromReducer:
    | Observable<typeof store.developmentReducer>
    | undefined;
  performanceGoalsFromReducer:
    | Observable<typeof store.performanceReducer>
    | undefined;
  newPerformanceGoal: boolean = false;
  newDevGoal: boolean = false;
  goals: any[] = [];

  constructor(private stores: Store<typeof store>) {}

  ngOnInit(): void {
    this.developmentGoalsFromReducer = this.stores.select('developmentReducer');
    this.performanceGoalsFromReducer = this.stores.select('performanceReducer');

    this.developmentGoalsFromReducer.subscribe({
      next: (values) => {
        const placeholder = values as unknown as { objectives: Array<any> };
        this.goals = [...this.goals, ...placeholder.objectives];
      },
    });

    this.performanceGoalsFromReducer.subscribe({
      next: (values) => {
        const placeholder = values as unknown as { objectives: Array<any> };
        this.goals = [...this.goals, ...placeholder.objectives];
      },
    });
  }

  setOpen(popupName: string) {
    if (popupName === 'dev') {
      this.newDevGoal = !this.newDevGoal;
    } else {
      this.newPerformanceGoal = !this.newPerformanceGoal;
    }
  }
}
