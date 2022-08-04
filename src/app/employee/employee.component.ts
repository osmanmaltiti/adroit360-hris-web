import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { store } from '../store/store';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  newPerformanceGoal: boolean = false;
  newDevGoal: boolean = false;

  goals: any[] = [];

  constructor(
    private stores: Store<typeof store>,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeService.onGetGoals().subscribe({
      next: ({ status, data }) => {
        if (status === 'success') {
          this.goals = data;
        }
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
