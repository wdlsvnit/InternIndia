import React, { Component, PropTypes } from 'react';

class ButtonPrimary extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<h1>Apply button</h1>  
    );
  }
}

export default ButtonPrimary;
