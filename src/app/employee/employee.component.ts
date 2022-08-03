import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { store } from '../store/store';
import { ObjectiveService } from './objectives.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  dataFromReducer: Observable<typeof store.developmentReducer> | undefined;
  newPerformanceGoal: boolean = false;
  newDevGoal: boolean = false;
  goals: any[] = [];

  constructor(
    private objectives: ObjectiveService,
    private stores: Store<typeof store>
  ) {}

  ngOnInit(): void {
    this.dataFromReducer = this.stores.select('developmentReducer');
    this.dataFromReducer.subscribe({
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
