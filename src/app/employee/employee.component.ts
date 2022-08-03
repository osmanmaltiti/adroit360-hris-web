import { Component, OnInit } from '@angular/core';
import { ObjectiveService } from './objectives.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  goals = this.objectives.data;
  newDevGoal: boolean = false;
  newPerformanceGoal: boolean = false;

  constructor(private objectives: ObjectiveService) {}

  ngOnInit(): void {}

  setOpen(popupName: string) {
    if (popupName === 'dev') {
      this.newDevGoal = !this.newDevGoal;
    } else {
      this.newPerformanceGoal = !this.newPerformanceGoal;
    }
  }
}
