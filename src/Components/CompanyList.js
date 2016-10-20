import React, { Component, PropTypes } from 'react';

class CompanyList extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
			<h1>I am the company list</h1>        
    );
  }
}

export default CompanyList;
