import { createAction, props } from '@ngrx/store';
import { IGoal } from './types';

export const add_performance_goal = createAction(
  'ADD_TO_PERFORMANCE_GOALS',
  props<{ payload: IGoal }>()
);
