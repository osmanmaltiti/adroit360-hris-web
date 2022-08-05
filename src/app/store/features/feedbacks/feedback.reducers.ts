import { createReducer, on } from '@ngrx/store';
import { setFeedback, viewFeedback } from './feedback.actions';
import { IInitialState } from './types';

export const initialState: IInitialState = {
  allFeedbacks: [],
  feedback: {
    score: 0,
    rating: 0,
    employee: '',
    appraise: '',
    employeeId: '',
    managerId: '',
    objectiveType: '',
    developmentObjective: null,
    performanceObjective: null,
  },
};

export const feedbackReducer = createReducer(
  initialState,
  on(setFeedback, (state, { payload }) => {
    return { ...state, allFeedbacks: payload };
  }),
  on(viewFeedback, (state, { payload }) => {
    return { ...state, feedback: payload };
  })
);
