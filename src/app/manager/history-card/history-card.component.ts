import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setReview } from 'src/app/store/features/reviews/review.actions';
import { store } from 'src/app/store/store';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css'],
})
export class HistoryCardComponent implements OnInit {
  @Input('history') history: any;

  constructor(private stores: Store<typeof store>, private router: Router) {}

  ngOnInit(): void {}

  viewHistory() {
    this.stores.dispatch(setReview({ payload: this.history }));
    this.router.navigate(['/manager/review']);
  }
}
