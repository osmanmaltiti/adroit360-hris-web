import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { initialState } from 'src/app/store/features/feedbacks/feedback.reducers';
import { IFeedback } from 'src/app/store/features/feedbacks/types';
import { store } from 'src/app/store/store';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css'],
})
export class ViewFeedbackComponent implements OnInit {
  @Output('close') setClose: EventEmitter<any> = new EventEmitter();
  @Input('open') open: boolean = false;
  feedback: IFeedback = initialState.feedback;

  constructor(private stores: Store<typeof store>) {}

  ngOnInit(): void {
    this.stores.select('feedbackReducer').subscribe({
      next: (value) => {
        const { feedback } = value as unknown as { feedback: IFeedback };
        this.feedback = feedback;
      },
    });
  }

  onClose() {
    this.setClose.emit();
  }

  getEntries(data: IFeedback) {
    if (data.developmentObjective) {
      return Object.entries(data.developmentObjective.fields) as [string, any];
    } else {
      return Object.entries(data.performanceObjective.fields) as [string, any];
    }
  }

  getRatings(data: number) {
    const stars = Array(Number(data)).fill(1);
    const noStars = Array(5 - Number(data)).fill(1);
    return { stars, noStars };
  }
}
