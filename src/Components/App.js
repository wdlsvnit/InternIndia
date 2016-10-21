import React, { Component } from 'react';
// Components
import CompanyList from './CompanyList';

// We need to pull all the data here

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
