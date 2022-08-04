import { createAction, props } from '@ngrx/store';
import { IReview } from './types';

export const setReview = createAction(
  'SET_REVIEW',
  props<{ payload: IReview }>()
);
