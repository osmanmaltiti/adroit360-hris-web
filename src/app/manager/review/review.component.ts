import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initialState } from 'src/app/store/features/reviews/review.reducers';
import { IReview } from 'src/app/store/features/reviews/types';
import { store } from 'src/app/store/store';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  constructor(private stores: Store<typeof store>) {}
  review: IReview = initialState;

  ngOnInit(): void {
    this.stores.select('reviewReducer').subscribe({
      next: (value) => {
        const newValue = value as unknown as IReview;
        this.review = newValue;
      },
    });
  }

  getEntries(data: IReview) {
    if (data.developmentObjective) {
      return Object.entries(data.developmentObjective.fields) as [string, any];
    } else {
      return Object.entries(data.performanceObjective.fields) as [string, any];
    }
  }
}
