import { INCREASE_COUNTER, DECREASE_COUNTER, COLOR_CHANGED } from './actionTypes';

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
});

export const colorChanged = type => ({
  type: COLOR_CHANGED,
  payload: type
});