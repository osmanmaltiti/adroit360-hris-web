import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setReview } from 'src/app/store/features/reviews/review.actions';
import { IReview } from 'src/app/store/features/reviews/types';
import { store } from 'src/app/store/store';

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

  constructor(private stores: Store<typeof store>, private router: Router) {}

  ngOnInit(): void {}

  dispatchReview(data: IReview) {
    this.stores.dispatch(setReview({ payload: data }));
    this.router.navigate(['review']);
  }
}
