import { createReducer, on } from '@ngrx/store';
import { add_dev_goal } from './development.actions';
import { IInitialState } from './types';

const initialState: IInitialState = {
  objectives: [],
};

export const developmentReducer = createReducer(
  initialState,
  on(add_dev_goal, (state, { payload }) => {
    const { objectives } = state;

    return { ...state, objectives: [...objectives, payload] };
  })
);
