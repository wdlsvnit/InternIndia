import React, { Component, PropTypes } from 'react';

class OpeningInfo extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Opening Info</h1>  
    );
  }
}

export default OpeningInfo;
