import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  constructor(private managerService: ManagerService, private router: Router) {}

  reviews: any[] = [];
  profile = {
    fullname: '',
    role: '',
    employees: [],
    history: [],
  };
  viewEmployees: boolean = false;
  date: number = Date.now();

  alertMessage: string = '';
  alert: boolean = false;
  alertTimeout: any;

  ngOnInit(): void {
    this.onGetReviews();
    this.onGetProfile();
  }

  onGetReviews() {
    this.managerService.onGetPendingReviews().subscribe({
      next: (values) => (this.reviews = values.data),
    });
  }

  onGetProfile() {
    this.managerService.onGetProfile().subscribe({
      next: (values) => {
        this.profile = values.data;
      },
    });
  }

  onViewEmployees() {
    this.viewEmployees = !this.viewEmployees;
  }

  onLogout() {
    localStorage.removeItem('uid');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/auth_manager']);
  }
}
