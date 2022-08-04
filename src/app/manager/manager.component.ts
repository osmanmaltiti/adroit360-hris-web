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

  ngOnInit(): void {
    this.onGetReviews();
  }

  onGetReviews() {
    this.managerService.onGetPendingReviews().subscribe({
      next: (values) => (this.reviews = values.data),
    });
  }
}
