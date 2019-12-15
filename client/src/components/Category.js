/* eslint-disable class-methods-use-this */
import React from 'react';

import SlideShow from './SlideShow';

class Category extends React.Component {
  render() {
    return (
      <div>
        Category Page
        <SlideShow
          image={ 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' }
          close = { () => console.log('close') }
          arrow = { (a) => console.log(a) }
        />
      </div>
    );
  }
}

export default Category;
