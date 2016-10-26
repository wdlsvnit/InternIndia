import React, { Component, PropTypes } from 'react';

class NotFound extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
   		<h1>Nothing was found here</h1>     
    );
  }
}

export default NotFound;
