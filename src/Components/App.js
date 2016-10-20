import React, { Component } from 'react';
import logo from '../logo.svg';

// Components
import CompanyList from './CompanyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CompanyList/>
      </div>
    );
  }
}

export default App;
