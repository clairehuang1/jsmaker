import React, { Component } from 'react';
import NavBar from './forms/NavBar.js'
class App extends Component {
  render() {
    return (
      <div>
      <div>
      <NavBar/>
      </div>
      <div className="container">
        {this.props.children}
      </div>
      </div>
    );
  }
}

export default App;
