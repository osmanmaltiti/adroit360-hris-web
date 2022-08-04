import { createReducer, on } from '@ngrx/store';
import {
  decreaseRating,
  decreaseScore,
  increaseRating,
  increaseScore,
  setAppraise,
  setReview,
} from './review.actions';
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
  }),
  on(setAppraise, (state, { payload }) => {
    return { ...state, appraise: payload };
  }),
  on(increaseScore, (state) => {
    return {
      ...state,
      score: state.score < 5 ? state.score + 1 : 5,
    };
  }),
  on(decreaseScore, (state) => {
    return {
      ...state,
      score: state.score > 1 ? state.score - 1 : 0,
    };
  }),
  on(increaseRating, (state) => {
    return {
      ...state,
      rating: state.rating < 5 ? state.rating + 1 : 5,
    };
  }),
  on(decreaseRating, (state) => {
    return {
      ...state,
      Rating: state.rating > 1 ? state.rating - 1 : 0,
    };
  })
);
