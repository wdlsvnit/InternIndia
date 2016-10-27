import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class NavItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props); 
  }

  render() {
    var navItemClasses = classNames({
      'navItem': true,
      'active': this.props.active
    });

    return (
      <li className={navItemClasses}>
        {this.props.text}
      </li>
    );
  }
}

export default NavItem;
