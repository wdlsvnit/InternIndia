import React, { Component, PropTypes } from 'react';

import NavItem from './NavItem';

class Nav extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="mainNav">
        <ul className="nav">
          <NavItem text="Home" active={true} />
          <NavItem text="About" active={false} />
          <NavItem text="Contribute" active={false} />
        </ul>
      </nav>
    );
  }
}

export default Nav;
