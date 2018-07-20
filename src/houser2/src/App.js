import React, { Component } from 'react';

import routes from './routes';
import Header from './component/Header/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main_container">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
