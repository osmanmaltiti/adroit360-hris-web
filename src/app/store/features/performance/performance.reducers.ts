import { createReducer, on } from '@ngrx/store';
import { add_performance_goal } from './performance.actions';
import { IInitialState } from './types';

const initialState: IInitialState = {
  objectives: [],
};

export const performanceReducer = createReducer(
  initialState,
  on(add_performance_goal, (state, { payload }) => {
    const { objectives } = state;

    return { ...state, objectives: [...objectives, payload] };
  })
);
