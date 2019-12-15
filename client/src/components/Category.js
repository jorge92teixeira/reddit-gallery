/* eslint-disable class-methods-use-this */
import React from 'react';

import Spinner from './Spinner';

class Category extends React.Component {
  render() {
    return (
      <div>
        Category Page
        <Spinner />
      </div>
    );
  }
}

export default Category;
