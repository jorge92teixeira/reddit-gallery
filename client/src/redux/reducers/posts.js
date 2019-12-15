import { GET_POSTS_CATEGORY } from '../actions/types';

const initialState = {
  byCategory: [],
  bySubreddit: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_CATEGORY:
      return {
        ...state,
        byCategory: [...action.payload],
      };
    default:
      return state;
  }
};
