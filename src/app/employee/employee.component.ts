import { Component, OnInit } from '@angular/core';
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

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.onGetObjectives();
  }

  onGetObjectives() {
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
      this.onGetObjectives();
    } else {
      this.newPerformanceGoal = !this.newPerformanceGoal;
      this.onGetObjectives();
    }
  }
}
