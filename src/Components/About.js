import React, { Component, PropTypes } from 'react';

class About extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
			<h1>This is the about section, Hello how are you doing?</h1>        
    );
  }
}

export default About;
