import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="title-header">
        <button className="home-btn"><a href="login">Login</a></button>
        <button className="home-btn"><a href="signup">Sign up</a></button>
      </div>
    );
  }
}
HomePage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default HomePage;
