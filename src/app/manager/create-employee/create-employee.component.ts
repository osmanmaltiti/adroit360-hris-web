import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateEmployeeService } from './create-employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('formRef') employeeForm: NgForm | undefined;
  alertMessage: string = '';
  alert: boolean = false;
  alertTimeout: any;

  constructor(
    private createEmployeeService: CreateEmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.employeeForm && this.employeeForm.valid) {
      this.createEmployeeService
        .onCreateUser(this.employeeForm.value)
        .subscribe({
          next: ({ status }) => {
            if (status === 'success') {
              this.router.navigate(['/manager']);
            }
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
}
