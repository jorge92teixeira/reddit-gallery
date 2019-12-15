import { SET_SLIDESHOW_IMAGE, SET_SLIDESHOW_VISIBILITY } from '../actions/types';

const initialState = {
  isOpen: false,
  image: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SLIDESHOW_VISIBILITY:
      return {
        ...state,
        isOpen: action.payload,
      };
    case SET_SLIDESHOW_IMAGE:
      return {
        ...state,
        image: action.payload.image,
        index: action.payload.index,
      };
    default:
      return state;
  }
};
