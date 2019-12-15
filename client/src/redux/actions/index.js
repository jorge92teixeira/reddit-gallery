import {
  GET_LIST,
  GET_POSTS_CATEGORY,
  GET_POSTS_SUBREDDIT,
  SET_SLIDESHOW_IMAGE,
  SET_SLIDESHOW_VISIBILITY,
  SET_LANDING_TOGGLE,
} from './types';

// Get list
export const getList = () => async (dispatch) => {
  try {
    const response = await fetch('/api/posts/list');
    const data = await response.json();
    dispatch({
      type: GET_LIST,
      payload: data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

// Set landing Toggle
export const setLandingToggle = (toggle) => ({
  type: SET_LANDING_TOGGLE,
  payload: toggle,
});
