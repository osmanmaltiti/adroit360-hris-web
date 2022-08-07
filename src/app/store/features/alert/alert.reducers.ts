import { createAction, createReducer, on, props } from '@ngrx/store';

export const setAlert = createAction('SET_ALERT', props<{ payload: string }>());
export const removeAlert = createAction('REMOVE_ALERT');

interface IAlert {
  open: boolean;
  message: string;
}

export const initialState: IAlert = {
  open: false,
  message: '',
};

export const alertReducer = createReducer(
  initialState,
  on(setAlert, (state, { payload }) => {
    return { open: !state.open, message: payload };
  }),
  on(removeAlert, (state) => {
    return { open: !state.open, message: '' };
  })
);
