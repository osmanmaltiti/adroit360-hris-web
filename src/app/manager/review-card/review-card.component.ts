import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css'],
})
export class ReviewCardComponent implements OnInit {
  @Input('reviews') review: IReview = {
    score: 0,
    rating: 0,
    employee: '',
    appraise: '',
    employeeId: '',
    managerId: '',
    objectiveType: '',
    developmentObjective: null,
    performanceObjective: null,
  };

  constructor() {}

  ngOnInit(): void {}
}
interface IReview {
  score: number;
  rating: number;
  employee: string;
  appraise: string;
  employeeId: string;
  managerId: string;
  objectiveType: string;
  developmentObjective: any;
  performanceObjective: any;
}
