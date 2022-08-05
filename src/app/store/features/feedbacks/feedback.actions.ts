import { createAction, props } from '@ngrx/store';
import { IFeedback } from './types';

export const setFeedback = createAction(
  'SET_FEEDBACK',
  props<{ payload: IFeedback[] }>()
);

export const viewFeedback = createAction(
  'VIEW_FEEDBACK',
  props<{ payload: IFeedback }>()
);
