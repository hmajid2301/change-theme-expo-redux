import { combineReducers } from 'redux';
import Counter from './Counter';
import Color from './Color';

export default combineReducers({
  Counter,
  Color,
});

// const initialState = {
//   counter: 0
// }
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREASE_COUNTER':
//       return { counter: state.counter + 1 }
//     case 'DECREASE_COUNTER':
//       return { counter: state.counter - 1 }
//   }
//   return state
// }

// export default reducer;