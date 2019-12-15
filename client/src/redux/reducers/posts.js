import { GET_POSTS_CATEGORY, GET_POSTS_SUBREDDIT } from '../actions/types';

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
    case GET_POSTS_SUBREDDIT:
      return {
        ...state,
        bySubreddit: [...action.payload],
      };
    default:
      return state;
  }
};
