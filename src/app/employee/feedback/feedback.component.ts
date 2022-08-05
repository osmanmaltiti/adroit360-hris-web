import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { viewFeedback } from 'src/app/store/features/feedbacks/feedback.actions';
import { IFeedback } from 'src/app/store/features/feedbacks/types';
import { store } from 'src/app/store/store';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  constructor(private stores: Store<typeof store>, private router: Router) {}
  viewModal: boolean = false;
  feedbacks: IFeedback[] = [];

  ngOnInit(): void {
    this.stores.select('feedbackReducer').subscribe({
      next: (values) => {
        const { allFeedbacks } = values as unknown as {
          allFeedbacks: IFeedback[];
        };
        this.feedbacks = allFeedbacks;
      },
    });
  }

  onViewFeedback(data: IFeedback) {
    this.stores.dispatch(viewFeedback({ payload: data }));
    this.viewModal = !this.viewModal;
  }

  onLogout() {
    localStorage.removeItem('uid');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/']);
  }

  onSetView() {
    this.viewModal = !this.viewModal;
  }
}
