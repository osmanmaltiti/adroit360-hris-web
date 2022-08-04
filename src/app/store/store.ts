import { developmentReducer } from './features/development/development.reducers';
import { performanceReducer } from './features/performance/performance.reducers';
import { reviewReducer } from './features/reviews/review.reducers';

export const store = {
  developmentReducer,
  performanceReducer,
  reviewReducer,
};
