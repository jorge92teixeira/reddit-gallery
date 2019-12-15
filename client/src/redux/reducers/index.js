import { combineReducers } from 'redux';

import list from './list';
import landingToggle from './landingToggle';

export default combineReducers({
  list,
  landingToggle,
});
