import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateManagerService } from './create-manager.service';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.css'],
})
export class CreateManagerComponent implements OnInit {
  @ViewChild('formRef') employeeForm: NgForm | undefined;
  alertMessage: string = '';
  alert: boolean = false;
  alertTimeout: any;

  constructor(
    private createManagerService: CreateManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.employeeForm && this.employeeForm.valid) {
      this.createManagerService
        .onCreateUser(this.employeeForm.value)
        .subscribe({
          next: ({ status, data }) => {
            if (status === 'success') {
              localStorage.setItem('token', data.token);
              localStorage.setItem('uid', data.uid);
              localStorage.setItem('role', 'manager');
            }
            this.router.navigate(['/manager']);
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
