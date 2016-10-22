import React, { Component, PropTypes } from 'react';

import OpeningInfo from './OpeningInfo';
import ButtonPrimary from './ButtonPrimary';

class Opening extends Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="opening">
        <OpeningInfo info={this.props.data.role}/>
        <ButtonPrimary text="Apply" link={this.props.data.applyLink}/>
      </li>
    );
  }
}

export default Opening;
