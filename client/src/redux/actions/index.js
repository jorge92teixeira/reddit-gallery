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

// Set SlideSHow Visibility - true=open false=closed
export const setSlideShowVisibility = (visibility) => ({
  type: SET_SLIDESHOW_VISIBILITY,
  payload: visibility,
});

// Set SlideShow Image
export const setSlideShowImage = (image, index) => ({
  type: SET_SLIDESHOW_IMAGE,
  payload: { image, index },
});

// Get Posts by category
export const getPostsByCategory = (category) => async (dispatch) => {
  try {
    const response = await fetch(`/api/posts/category/${category}`);
    const data = await response.json();
    dispatch({
      type: GET_POSTS_CATEGORY,
      payload: data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

// Get Posts by subreddit
export const getPostsBySubreddit = (subreddit) => async (dispatch) => {
  try {
    const response = await fetch(`/api/posts/subreddit/${subreddit}`);
    const data = await response.json();
    dispatch({
      type: GET_POSTS_SUBREDDIT,
      payload: data,
    });
  } catch (error) {
    console.error(error.message);
  }
};
