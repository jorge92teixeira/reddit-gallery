import React from 'react';
import styled from 'styled-components';

const StyledGallery = styled.div`
  padding: 1rem;

  .gallery {
    column-count: 3;
    column-gap: 0.5rem;
    overflow: hidden;

    .container {
      position: relative;
      a {
        text-decoration: none;
        color: white;

        &:hover {
          text-decoration: underline;
        }
      }
      img {
        border: 1px solid #839496;

        width: 100%; 
        height: auto;
        margin-bottom: 0.5rem;
        page-break-inside: avoid; 
        -webkit-column-break-inside: avoid; 
        break-inside: avoid;
      }
      .text {
        visibility: hidden;
        color: white;
        font-size: 1.5rem;
        position: absolute;
        bottom: 1rem;
        left: 1rem;
      }
      &:hover {
        cursor: pointer;
      }
      &:hover .text {
        visibility: visible;
      }
      &:hover img {
        opacity: 0.7;
      }
    }
  }
`;


const GridGallery = ({ posts, handleImageClick }) => (
  <StyledGallery>
    {
      posts.length > 0
        && <div className="gallery">
          {
            posts.map((p, index) => (
              <div key={p._id} className="container">
                <img src={p.url} alt="alt" onClick={() => handleImageClick(p.url, index, true)} />
                <div className="text">
                  <a href={`http://www.reddit.com/r/${p.subreddit}`} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt" />
                    {'  '}
                    {`/r/${p.subreddit}`}
                  </a>
                </div>
              </div>
            ))
          }
          </div>
    }
  </StyledGallery>
);

export default GridGallery;
