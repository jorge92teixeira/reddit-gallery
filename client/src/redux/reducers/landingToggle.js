import { SET_LANDING_TOGGLE } from '../actions/types';

const initialState = 'category';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LANDING_TOGGLE:
      return action.payload;
    default:
      return state;
  }
};
