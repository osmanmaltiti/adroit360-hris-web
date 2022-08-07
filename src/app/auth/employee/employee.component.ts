import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeLoginService } from './login.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeAuthComponent implements OnInit, OnDestroy {
  constructor(
    private loginService: EmployeeLoginService,
    private router: Router
  ) {}

  @ViewChild('formRef') employeeForm: NgForm | undefined;
  alertMessage: string = '';
  alert: boolean = false;
  alertTimeout: any;

  ngOnInit(): void {}

  onSubmit() {
    if (this.employeeForm && this.employeeForm.valid) {
      this.loginService.onLogin(this.employeeForm.value).subscribe({
        next: ({ status, data }) => {
          if (status === 'success') {
            localStorage.setItem('token', data.token);
            localStorage.setItem('uid', data.uid);
            localStorage.setItem('role', 'employee');
          }
          this.router.navigate(['/employee']);
        },
        error: ({ error }) => {
          this.alertMessage = error.message;
          this.alert = true;
          this.alertTimeout = setTimeout(() => {
            this.alert = false;
          }, 3000);
        },
      });
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.alertTimeout);
  }
}
