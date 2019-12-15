import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1';
import { getPostsBySubreddit, setSlideShowVisibility, setSlideShowImage } from '../redux/actions';
import GridGallery from './GridGallery';
import SlideShow from './SlideShow';
import Spinner from './Spinner';

const StyledSubreddit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledButton = styled.button`
  background: none;
  color: white;
  border: 1px solid #afeeee;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 5rem;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  &:hover {
    background: #4c6a72;
  }
`;

class Subreddit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryArray: [],
      numberOfVisibleGalleries: 0,
      subreddit: this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1],
    };
  }

  async componentDidMount() {
    await this.props.getPostsBySubreddit(this.state.subreddit);
    this.galleryFactory();
  }

  handleImageClick = (image, index, bool) => {
    this.props.setSlideShowVisibility(bool);
    this.props.setSlideShowImage(image, index);
  };

  galleryFactory = () => {
    const a = (
      <GridGallery
        key={uuidv1()}
        posts={
          this.props.postsBySubreddit.slice(this.state.numberOfVisibleGalleries * 20,
            this.state.numberOfVisibleGalleries * 20 + 20)
        }
        handleImageClick={this.handleImageClick}
      />
    );

    this.setState({ galleryArray: this.state.galleryArray.concat(a) });
    this.setState({ numberOfVisibleGalleries: this.state.numberOfVisibleGalleries + 1 });
  };

  handleMorePosts = () => {
    if (this.state.numberOfVisibleGalleries === Math.ceil(this.props.postsBySubreddit.length / 20)) {
      return;
    }
    this.galleryFactory();
  };

  handleArrowClick = (arrow) => {
    if (arrow === 'left') {
      if (this.props.slideShow.index === 0) {
        return this.props.setSlideShowImage(
          this.props.postsBySubreddit[this.props.postsBySubreddit.length - 1].url,
          this.props.postsBySubreddit.length - 1,
        );
      }
      return this.props.setSlideShowImage(
        this.props.postsBySubreddit[this.props.slideShow.index - 1].url,
        this.props.slideShow.index - 1,
      );
    }
    if (this.props.slideShow.index >= this.props.postsBySubreddit.length - 1) {
      return this.props.setSlideShowImage(
        this.props.postsBySubreddit[0].url,
        0,
      );
    }
    return this.props.setSlideShowImage(
      this.props.postsBySubreddit[this.props.slideShow.index + 1].url,
      this.props.slideShow.index + 1,
    );
  };

  render() {
    return (
      <StyledSubreddit>
        {
          this.props.slideShow.isOpen && <SlideShow
            image={this.props.slideShow.image}
            close={() => this.props.setSlideShowVisibility(false)}
            arrow={this.handleArrowClick}
          />
        }
        {
          this.state.galleryArray.length > 0
            ? this.state.galleryArray
            : <Spinner />
        }
        <StyledButton type="button" onClick={this.handleMorePosts}>Load more Images</StyledButton>
      </StyledSubreddit>
    );
  }
}

const mapStateToProps = (state) => ({
  postsBySubreddit: state.posts.bySubreddit,
  slideShow: state.slideShow,
});

export default connect(
  mapStateToProps,
  {
    getPostsBySubreddit,
    setSlideShowVisibility,
    setSlideShowImage,
  },
)(Subreddit);
