import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Landing from './components/Landing';
import Subreddit from './components/Subreddit';
import Category from './components/Category';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path='/' component={Landing} />
      <Route exact path='/category/:category' component={Category} />
      <Route exact path='/subreddit/:subreddit' component={Subreddit} />
    </BrowserRouter>
  </Provider>
);

export default App;
