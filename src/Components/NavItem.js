import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
      <Link to={this.props.link} className={navItemClasses}>
        {this.props.text}
      </Link>
    );
  }
}

export default NavItem;
