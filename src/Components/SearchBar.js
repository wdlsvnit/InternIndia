import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchBar">
  			<input
  				className="searchInput" 
  				type="text" 
  				onChange={this.props.onInput} 
  				placeholder={this.props.placeholder}/>
      </div>
    );
  }
}

export default SearchBar;
