import { INCREASE_COUNTER, DECREASE_COUNTER, TOGGLE_THEME } from './actionTypes';

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
});

export const toggleTheme = theme => ({
  type: TOGGLE_THEME,
  payload: theme,
});