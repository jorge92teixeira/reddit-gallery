import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getList, setLandingToggle } from '../redux/actions';

const StyledLanding = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    margin: 1rem;
    color: white;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }
`;

class Landing extends React.Component {
  componentDidMount() {
    this.props.getList();
  }

  handleLandingToggle = (toggle) => {
    if (toggle === 'subreddit') {
      let subs = Object.keys(this.props.list).map((key) => this.props.list[key]);
      subs = subs.flat(Infinity);
      return (
        <div className="container">
          {
            subs.map((s) => (
              <Link key={s} to={`/subreddit/${s}`}>{s}</Link>
            ))
          }
        </div>
      );
    }

    return (
      <div className="container">
        {
          Object.keys(this.props.list).map((c) => (
            <Link key={c} to={`/category/${c.toLowerCase().replace(/\s+/g, '')}`}>{c}</Link>
          ))
        }
      </div>
    );
  };

  render() {
    return (
      <StyledLanding>
        <button type="button" onClick={() => this.props.setLandingToggle('category')}>category</button>
        <button type="button" onClick={() => this.props.setLandingToggle('subreddit')}>subreddit</button>
        {
          this.handleLandingToggle(this.props.landingToggle)
        }
      </StyledLanding>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.list,
  landingToggle: state.landingToggle,
});

export default connect(
  mapStateToProps,
  {
    getList,
    setLandingToggle,
  },
)(Landing);
