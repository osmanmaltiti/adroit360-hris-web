import { alertReducer } from './features/alert/alert.reducers';
import { feedbackReducer } from './features/feedbacks/feedback.reducers';
import { reviewReducer } from './features/reviews/review.reducers';

export const store = {
  reviewReducer,
  feedbackReducer,
  alertReducer,
};
