import React, { Component, PropTypes } from 'react';

import NavItem from './NavItem';

class Nav extends Component {
  static propTypes = {
    className: PropTypes.string,
    activeLink: PropTypes.oneOf(['home', 'about'])
  };

  constructor(props) {
    super(props);
  }

  render() {
    var { activeLink } = this.props;
    return (
      <nav className="navWrapper">
        <section className="nav">
          <NavItem text="Home" active={activeLink === 'home'} link="/" />
          <NavItem text="About" active={activeLink === 'about'} link="/about" />
        </section>
      </nav>
    );
  }
}

export default Nav;
