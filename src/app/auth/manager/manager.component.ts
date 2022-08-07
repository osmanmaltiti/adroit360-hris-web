import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerLoginService } from './login.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerAuthComponent implements OnInit {
  @ViewChild('formRef') managerForm: NgForm | undefined;
  alertMessage: string = '';
  alert: boolean = false;
  alertTimeout: any;

  constructor(
    private loginService: ManagerLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.managerForm && this.managerForm.valid) {
      this.loginService.onLogin(this.managerForm.value).subscribe({
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
