import { combineReducers } from 'redux';

export default combineReducers({
  blank(state, action) { state = 'hello'; return state; },
});
