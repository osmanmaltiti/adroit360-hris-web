import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setFeedback } from '../store/features/feedbacks/feedback.actions';
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
  date: number = Date.now();

  goals: any[] = [];
  feedbacks: number = 0;
  profile = {
    fullname: '',
    role: '',
    manager: '',
  };

  alertMessage: string = '';
  alert: boolean = false;
  alertTimeout: any;

  constructor(
    private employeeService: EmployeeService,
    private stores: Store<typeof store>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onGetObjectives();
    this.onGetProfile();
    this.onGetFeedbacks();
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

  onGetFeedbacks() {
    this.employeeService.onGetFeedback().subscribe({
      next: ({ status, data }) => {
        if (status === 'success') {
          this.feedbacks = data.length;
          this.stores.dispatch(setFeedback({ payload: data }));
        }
      },
    });
  }

  onGetProfile() {
    this.employeeService.onGetProfile().subscribe({
      next: (values) => {
        this.profile = values.data;
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

  onLogout() {
    localStorage.removeItem('uid');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/']);
  }

  onAlert() {
    this.alert = true;
    this.alertMessage = 'review submitted successfully';
    this.alertTimeout = setTimeout(() => {
      this.alert = false;
    }, 2000);
  }
}
