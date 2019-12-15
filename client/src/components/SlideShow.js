import React from 'react';
import styled from 'styled-components';

const StyledSlideShow = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0,0,0, 0.95);
  animation-name: zoom;
  animation-duration: 0.3s;
  text-align: center;
  color: white;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  .header {
    margin: 1rem;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      padding: 1rem;
      border: none;
      background: none;
      color: white;
      font: inherit;
      outline: inherit;

      &:hover {
        color: #bbb;
        cursor: pointer;
      }
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    img {
      /* object-fit: scale-down; */
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

const SlideShow = ({ image, close, arrow }) => (
  <StyledSlideShow>
    <div className="header">
      <button onClick={() => arrow('left')}>
        <i className="fas fa-angle-left fa-lg" />
      </button>
      <button onClick={() => arrow('right')}>
        <i className="fas fa-angle-right fa-lg" />
      </button>
      <button onClick={close}>
        <i className="close fas fa-times fa-lg" />
      </button>
    </div>
    <div className="content">
      <img src={image} alt="img" />
    </div>
  </StyledSlideShow>
);

export default SlideShow;
