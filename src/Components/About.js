import React, { Component, PropTypes } from 'react';

// Components 
import Nav from './Nav';

class About extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Nav activeLink="about"/>
        <article className="about">
          <h1>Compiled list of internships available in India</h1>
        </article>
      </div>
    );
  }
}

export default About;
