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
      <div className="about">
        Hello from the about page
      </div>
    );
  }
}

export default About;
