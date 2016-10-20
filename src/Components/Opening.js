import React, { Component, PropTypes } from 'react';

class Opening extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<h1>Opening</h1> 
    );
  }
}

export default Opening;
