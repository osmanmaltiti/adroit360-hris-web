import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeLoginService } from './login.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeAuthComponent implements OnInit {
  @ViewChild('formRef') employeeForm: NgForm | undefined;
  constructor(
    private loginService: EmployeeLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.employeeForm && this.employeeForm.valid) {
      this.loginService.onLogin(this.employeeForm.value).subscribe({
        next: ({ status, data }) => {
          if (status === 'success') {
            localStorage.setItem('token', data.token);
            localStorage.setItem('uid', data.uid);
          }
          this.router.navigate(['/employee']);
        },
        error: (err) => console.log(err),
      });
    }
  }
}
