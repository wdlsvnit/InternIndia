import React, { Component, PropTypes } from 'react';

class CompanyInfo extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>This is the company info right here</h1>  
    );
  }
}

export default CompanyInfo;
