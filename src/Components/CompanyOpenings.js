import React, { Component, PropTypes } from 'react';

class CompanyOpenings extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Company Openings</h1>  
    );
  }
}

export default CompanyOpenings;
