import { createReducer, on } from '@ngrx/store';
import { setReview } from './review.actions';
import { IReview } from './types';

export const initialState: IReview = {
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

export const reviewReducer = createReducer(
  initialState,
  on(setReview, (state, { payload }) => {
    return { ...state, ...payload };
  })
);
