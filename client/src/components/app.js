import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
      <h1> oh hai there </h1>
      <div className="container">
        {this.props.children}
      </div>
      </div>
    );
  }
}

export default App;
