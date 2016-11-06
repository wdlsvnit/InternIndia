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
          <section className="aboutContent">
            <p>
              Internships can play an important role in getting your foot in the door. But they are hard to find, especially in India. Inspired by <a href="http://www.intern.supply" target="_blank">intern.supply</a> we made this accessible list of available internships in India.
              Know a startup/company that's offering internships? You can go ahead and open a PR to <a href="https://github.com/WebDevLabs-SVNIT/InternIndia#to-add-your-start-upcompany" target="_blank">this repo</a>.
            </p>
          </section>
        </article>
      </div>
    );
  }
}

export default About;
