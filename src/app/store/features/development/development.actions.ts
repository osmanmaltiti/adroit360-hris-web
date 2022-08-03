import { createAction, props } from '@ngrx/store';
import { IGoal } from './types';

export const add_dev_goal = createAction(
  'ADD_TO_DEV_GOALS',
  props<{ payload: IGoal }>()
);
