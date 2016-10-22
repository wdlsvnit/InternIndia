import React, { Component } from 'react';
// Components
import CompanyList from './CompanyList';
import SearchBar from './SearchBar';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchString: null
		};
	}

	searchPerformed(e) {
		this.setState({
			searchString: e.target.value
		});
	}

  render() {
    return (
      <div className="App">
      	<SearchBar onInput={this.searchPerformed.bind(this)} placeholder="Search by company name..."/>
        <CompanyList searchString={this.state.searchString}/>
      </div>
    );
  }
}

export default App;
