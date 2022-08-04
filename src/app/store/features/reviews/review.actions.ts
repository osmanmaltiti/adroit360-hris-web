import { createAction, props } from '@ngrx/store';
import { IReview } from './types';

export const setReview = createAction(
  'SET_REVIEW',
  props<{ payload: IReview }>()
);

export const setAppraise = createAction(
  'SET_APPRAISE',
  props<{ payload: string }>()
);

export const increaseScore = createAction('INCREASE_SCORE');

export const decreaseScore = createAction('DECREASE_SCORE');

export const increaseRating = createAction('INCREASE_RATING');

export const decreaseRating = createAction('DECREASE_RATING');
