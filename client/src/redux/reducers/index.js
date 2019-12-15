import { combineReducers } from 'redux';

import posts from './posts';
import slideShow from './slideShow';
import list from './list';
import landingToggle from './landingToggle';

export default combineReducers({
  posts,
  slideShow,
  list,
  landingToggle,
});
