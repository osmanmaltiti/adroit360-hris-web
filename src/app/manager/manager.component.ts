import { Component, OnInit } from '@angular/core';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  constructor(private managerService: ManagerService) {}

  reviews: any[] = [];
  profile = {
    fullname: '',
    role: '',
    employees: [],
    history: [],
  };
  viewEmployees: boolean = false;

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
}
